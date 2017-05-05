var map = null;

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

    // 调用初始化函数
    var mapShow = parent.App.query('mapshow');
    if (mapShow != null) {
        if (typeof (mapShow.onMapInit) == 'function') {
            mapShow.onMapInit(mapShow);
        }
    }
}

function drawPoint(point, options) {
    var marker = new T.Marker(point);
    map.addOverLay(marker);
}

function drawPolyline(polyline, options) {
    var line = new T.Polyline(polyline);
    map.addOverLay(line);
}

function drawPolygon(polygon, options) {
    var area = new T.Polygon(polygon);
    map.addOverLay(area);
}