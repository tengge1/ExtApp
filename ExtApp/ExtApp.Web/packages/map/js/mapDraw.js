var map = null;
var type = 'point';
var markerTool = null;
var polylineTool = null;
var polygonTool = null;

function getValue() {
    if (type == 'polyline') {
        var polylines = polylineTool.getPolylines();
        if (polylines != null && polylines.length > 0) {
            return polylines[0].St;
        }
        return null;
    } else if (type == 'polygon') {
        var polygons = polygonTool.getPolygons();
        if (polygons != null && polygons.length > 0) {
            return polygons[0].St;
        }
        return null;
    } else {
        return markerTool.getMarkControlPoint();
    }
}

function start() {
    map = new T.Map(document.body);

    map.enableScrollWheelZoom();
    map.centerAndZoom(new T.LngLat(116.40969, 39.89945), 12);

    // 缩放控件
    var control = new T.Control.Zoom();
    map.addControl(control);

    // 比例尺控件
    var scale = new T.Control.Scale();
    map.addControl(scale);

    // 根据type启用不同绘制工具
    type = getQueryString('type');
    if (type == 'polyline') { // 画线
        polylineTool = new T.PolylineTool(map);
        polylineTool.open();
        polylineTool.on('draw', function (e) {
            polylineTool.close();
            e.currentPolyline.enableEdit();
        });
    } else if (type == 'polygon') { // 画面
        polygonTool = new T.PolygonTool(map);
        polygonTool.open();
        polygonTool.on('draw', function (e) {
            polygonTool.close();
            e.currentPolygon.enableEdit();
        });
    } else { // 画点
        markerTool = new T.MarkTool(map, { follow: true });
        markerTool.open();
        markerTool.on('mouseup', function (e) {
            markerTool.close();
            e.currentMarker.enableDragging();
        });
    }
}

var getQueryString = function (name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) {
        return unescape(r[2]);
    }
    return null;
}
