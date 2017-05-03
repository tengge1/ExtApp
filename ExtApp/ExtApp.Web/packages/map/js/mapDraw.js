var map = null;

function start() {
    //var imageURL = "http://t0.tianditu.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}";
    //var lay = new T.TileLayer(imageURL, { minZoom: 1, maxZoom: 18 });

    map = new T.Map(document.body, {
        //layers: [lay]
        //projection: 'EPSG:4326'
    });

    map.enableScrollWheelZoom();
    map.centerAndZoom(new T.LngLat(116.40969, 39.89945), 12);

    // 缩放控件
    var control = new T.Control.Zoom();
    map.addControl(control);

    // 比例尺控件
    var scale = new T.Control.Scale();
    map.addControl(scale);

    // 鹰眼地图控件
    var miniMap = new T.Control.OverviewMap({
        isOpen: true,
        size: new T.Point(150, 150)
    });
    map.addControl(miniMap);

    // 根据type启用不同绘制工具
    var type = getQueryString('type');
    if (type == 'polyline') { // 画线
        var polylineTool = new T.PolylineTool(map);
        polylineTool.open();
        polylineTool.on('draw', function (e) {
            polylineTool.close();
            e.currentPolyline.enableEdit();
            console.log(e.currentPolyline);
        });
    } else if (type == 'polygon') { // 画面
        var polygonTool = new T.PolygonTool(map);
        polygonTool.open();
        polygonTool.on('draw', function (e) {
            polygonTool.close();
            e.currentPolygon.enableEdit();
            console.log(e.currentPolygon);
        });
    } else { // 画点
        var markerTool = new T.MarkTool(map, { follow: true });
        markerTool.open();
        markerTool.on('mouseup', function (e) {
            markerTool.close();
            e.currentMarker.enableDragging();
            console.log(e.currentMarker);
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
