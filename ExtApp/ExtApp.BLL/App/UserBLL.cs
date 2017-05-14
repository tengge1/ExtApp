using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using ExtApp.Model;
using NHibernate.Criterion;

namespace ExtApp.BLL
{
    /// <summary>
    /// 用户BLL
    /// </summary>
    public class UserBLL : BaseBLL<User>
    {
        /// <summary>
        /// 获取用户列表
        /// </summary>
        /// <param name="p"></param>
        /// <param name="total"></param>
        /// <returns></returns>
        public IList<User> List(UserListParam p, out int total)
        {
            ICriterion query = Restrictions.Gt("Status", -1);

            // 用户名、姓名
            if (!string.IsNullOrEmpty(p.name))
            {
                var query1 = Restrictions.Like("Username", p.name, MatchMode.Anywhere);
                var query2 = Restrictions.Like("Name", p.name, MatchMode.Anywhere);
                var query3 = Restrictions.Or(query1, query2);
                query = Restrictions.And(query, query3);
            }

            // 部门
            if (p.DeptID != null && p.DeptID != 0)
            {
                var query1 = Restrictions.Eq("Dept", new Dept
                {
                    ID = p.DeptID.Value
                });
                query = Restrictions.And(query, query1);
            }

            // 角色
            if (p.RoleID != null && p.RoleID != 0)
            {
                var query1 = Restrictions.Eq("Role", new Role
                {
                    ID = p.RoleID.Value
                });
                query = Restrictions.And(query, query1);
            }

            // 状态
            if (p.Status != null)
            {
                var query1 = Restrictions.Eq("Status", p.Status.Value);
                query = Restrictions.And(query, query1);
            }

            var list = dal.List(p.firstResult, p.maxResults, out total, query);
            return list;
        }

        /// <summary>
        /// 添加用户
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Add(UserEditParam p)
        {
            // 不允许选择顶级机构
            if (p.DeptID == 0)
            {
                return new Result(300, "无法选择顶级机构！");
            }

            // 判断用户名是否重复
            var query = Restrictions.Eq("Username", p.Username);
            var count = dal.Count(query);
            if (count > 0)
            {
                return new Result(300, "用户名重复，添加失败！");
            }

            var user = new User
            {
                ID = 0,
                Username = p.Username,
                Password = PasswordHelper.Crypt(p.Password),
                Name = p.Name,
                Dept = p.DeptID == null ? null : new Dept { ID = p.DeptID.Value },
                Role = p.RoleID == null ? null : new Role { ID = p.RoleID.Value },
                Duty = p.Duty,
                Phone = p.Phone,
                Email = p.Email,
                Birthday = p.Birthday,
                Address = p.Address,
                Sort = p.Sort == null ? 0 : p.Sort,
                Comment = p.Comment,
                AddTime = DateTime.Now,
                isAdmin = false,
                Status = 1
            };
            if (p.SexID != null)
            {
                user.Sex = new DicItem { ID = p.SexID.Value };
            }
            var result = dal.Add(user);
            if (result)
            {
                return new Result(200, "添加成功！");
            }
            else
            {
                return new Result(300, "添加失败！");
            }
        }

        /// <summary>
        /// 编辑
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        public Result Edit(UserEditParam p)
        {
            // 不允许选择顶级机构
            if (p.DeptID == 0)
            {
                return new Result(300, "无法选择顶级机构！");
            }

            // 验证用户名是否重复
            var query1 = Restrictions.Eq("ID", p.ID);
            var query2 = Restrictions.Not(query1);
            var query3 = Restrictions.Eq("Username", p.Username);
            var query = Restrictions.And(query2, query3);
            var count = dal.Count(query);
            if (count > 0)
            {
                return new Result(300, "用户名重复，编辑失败！");
            }

            var user = dal.Get(p.ID);
            user.Address = p.Address;
            user.Birthday = p.Birthday;
            user.Comment = p.Comment;
            user.Dept = p.DeptID == null ? null : new Dept { ID = p.DeptID.Value };
            user.Duty = p.Duty;
            user.Email = p.Email;
            user.Name = p.Name;
            user.Phone = p.Phone;
            user.Role = p.RoleID == null ? null : new Role { ID = p.RoleID.Value };
            if (p.SexID != null)
            {
                user.Sex = new DicItem { ID = p.SexID.Value };
            }
            user.Sort = p.Sort;
            user.Status = p.Status;
            user.Username = p.Username;
            var result = dal.Edit(user);
            if (result)
            {
                return new Result(200, "编辑成功！");
            }
            else
            {
                return new Result(300, "编辑失败！");
            }
        }

        /// <summary>
        /// 删除
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public override Result Delete(int ID)
        {
            var model = dal.Get(ID);
            if (model.isAdmin == true)
            {
                return new Result
                {
                    Code = 200,
                    Msg = "无法删除超级管理员！"
                };
            }
            return base.Delete(ID);
        }

        /// <summary>
        /// 重置用户密码
        /// </summary>
        /// <param name="ID"></param>
        /// <returns></returns>
        public Result ResetPassword(int ID)
        {
            var initPassword = ConfigHelper.Get("UserInitPwd");
            if (initPassword == null)
            {
                initPassword = "123";
            }
            var model = dal.Get(ID);
            if (model == null)
            {
                return new Result(300, "该用户不存在！");
            }
            model.Password = PasswordHelper.Crypt(initPassword);
            dal.Edit(model);
            return new Result(200, "密码重置成功！");
        }
    }
}
