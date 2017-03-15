using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ExtApp
{
    /// <summary>
    /// 空任务
    /// </summary>
    public class EmptyTask
    {
        /// <summary>
        /// 启动任务
        /// </summary>
        /// <returns></returns>
        public static Task Start()
        {
            var taskSource = new TaskCompletionSource<AsyncVoid>();
            taskSource.SetResult(default(AsyncVoid));
            return taskSource.Task as Task;
        }

        /// <summary>
        /// 异步结构体
        /// </summary>
        private struct AsyncVoid
        {

        }
    }
}
