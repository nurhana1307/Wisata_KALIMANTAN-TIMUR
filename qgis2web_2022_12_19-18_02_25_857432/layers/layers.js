var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_samarinda_1 = new ol.format.GeoJSON();
var features_samarinda_1 = format_samarinda_1.readFeatures(json_samarinda_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_samarinda_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_samarinda_1.addFeatures(features_samarinda_1);
var lyr_samarinda_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_samarinda_1, 
                style: style_samarinda_1,
                interactive: true,
                title: '<img src="styles/legend/samarinda_1.png" /> samarinda'
            });
var format_pantai_kaltim_2 = new ol.format.GeoJSON();
var features_pantai_kaltim_2 = format_pantai_kaltim_2.readFeatures(json_pantai_kaltim_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pantai_kaltim_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pantai_kaltim_2.addFeatures(features_pantai_kaltim_2);
var lyr_pantai_kaltim_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pantai_kaltim_2, 
                style: style_pantai_kaltim_2,
                interactive: true,
                title: '<img src="styles/legend/pantai_kaltim_2.png" /> pantai_kaltim'
            });
var format_paser2_3 = new ol.format.GeoJSON();
var features_paser2_3 = format_paser2_3.readFeatures(json_paser2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paser2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paser2_3.addFeatures(features_paser2_3);
var lyr_paser2_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paser2_3, 
                style: style_paser2_3,
                interactive: true,
                title: '<img src="styles/legend/paser2_3.png" /> paser2'
            });
var format_balikpapan_4 = new ol.format.GeoJSON();
var features_balikpapan_4 = format_balikpapan_4.readFeatures(json_balikpapan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_balikpapan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_balikpapan_4.addFeatures(features_balikpapan_4);
var lyr_balikpapan_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_balikpapan_4, 
                style: style_balikpapan_4,
                interactive: true,
                title: '<img src="styles/legend/balikpapan_4.png" /> balikpapan'
            });
var format_mahakam_ulu_5 = new ol.format.GeoJSON();
var features_mahakam_ulu_5 = format_mahakam_ulu_5.readFeatures(json_mahakam_ulu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mahakam_ulu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mahakam_ulu_5.addFeatures(features_mahakam_ulu_5);
var lyr_mahakam_ulu_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mahakam_ulu_5, 
                style: style_mahakam_ulu_5,
                interactive: true,
                title: '<img src="styles/legend/mahakam_ulu_5.png" /> mahakam_ulu'
            });
var format_paser_6 = new ol.format.GeoJSON();
var features_paser_6 = format_paser_6.readFeatures(json_paser_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_paser_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_paser_6.addFeatures(features_paser_6);
var lyr_paser_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_paser_6, 
                style: style_paser_6,
                interactive: true,
                title: '<img src="styles/legend/paser_6.png" /> paser'
            });
var format_kutim_7 = new ol.format.GeoJSON();
var features_kutim_7 = format_kutim_7.readFeatures(json_kutim_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kutim_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kutim_7.addFeatures(features_kutim_7);
var lyr_kutim_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kutim_7, 
                style: style_kutim_7,
                interactive: true,
                title: '<img src="styles/legend/kutim_7.png" /> kutim'
            });
var format_kukar_8 = new ol.format.GeoJSON();
var features_kukar_8 = format_kukar_8.readFeatures(json_kukar_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kukar_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kukar_8.addFeatures(features_kukar_8);
var lyr_kukar_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_kukar_8, 
                style: style_kukar_8,
                interactive: true,
                title: '<img src="styles/legend/kukar_8.png" /> kukar'
            });
var format_bontang_9 = new ol.format.GeoJSON();
var features_bontang_9 = format_bontang_9.readFeatures(json_bontang_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_bontang_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_bontang_9.addFeatures(features_bontang_9);
var lyr_bontang_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_bontang_9, 
                style: style_bontang_9,
                interactive: true,
                title: '<img src="styles/legend/bontang_9.png" /> bontang'
            });
var format_berau_10 = new ol.format.GeoJSON();
var features_berau_10 = format_berau_10.readFeatures(json_berau_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_berau_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_berau_10.addFeatures(features_berau_10);
var lyr_berau_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_berau_10, 
                style: style_berau_10,
                interactive: true,
                title: '<img src="styles/legend/berau_10.png" /> berau'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_samarinda_1.setVisible(true);lyr_pantai_kaltim_2.setVisible(true);lyr_paser2_3.setVisible(true);lyr_balikpapan_4.setVisible(true);lyr_mahakam_ulu_5.setVisible(true);lyr_paser_6.setVisible(true);lyr_kutim_7.setVisible(true);lyr_kukar_8.setVisible(true);lyr_bontang_9.setVisible(true);lyr_berau_10.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_samarinda_1,lyr_pantai_kaltim_2,lyr_paser2_3,lyr_balikpapan_4,lyr_mahakam_ulu_5,lyr_paser_6,lyr_kutim_7,lyr_kukar_8,lyr_bontang_9,lyr_berau_10];
lyr_samarinda_1.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_pantai_kaltim_2.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_paser2_3.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_balikpapan_4.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_mahakam_ulu_5.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_paser_6.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_kutim_7.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_kukar_8.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_bontang_9.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_berau_10.set('fieldAliases', {'Name': 'Name', 'vidio': 'vidio', });
lyr_samarinda_1.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_pantai_kaltim_2.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_paser2_3.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_balikpapan_4.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_mahakam_ulu_5.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_paser_6.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_kutim_7.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_kukar_8.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_bontang_9.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_berau_10.set('fieldImages', {'Name': '', 'vidio': '', });
lyr_samarinda_1.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_pantai_kaltim_2.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_paser2_3.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_balikpapan_4.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_mahakam_ulu_5.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_paser_6.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_kutim_7.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_kukar_8.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_bontang_9.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_berau_10.set('fieldLabels', {'Name': 'no label', 'vidio': 'no label', });
lyr_berau_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});