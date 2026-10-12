var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_limite_admin_4326_1 = new ol.format.GeoJSON();
var features_limite_admin_4326_1 = format_limite_admin_4326_1.readFeatures(json_limite_admin_4326_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_limite_admin_4326_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_limite_admin_4326_1.addFeatures(features_limite_admin_4326_1);
var lyr_limite_admin_4326_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_limite_admin_4326_1, 
                style: style_limite_admin_4326_1,
                popuplayertitle: 'limite_admin_4326',
                interactive: true,
                title: '<img src="styles/legend/limite_admin_4326_1.png" /> limite_admin_4326'
            });
var format_voies_4326_2 = new ol.format.GeoJSON();
var features_voies_4326_2 = format_voies_4326_2.readFeatures(json_voies_4326_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_voies_4326_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_voies_4326_2.addFeatures(features_voies_4326_2);
var lyr_voies_4326_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_voies_4326_2, 
                style: style_voies_4326_2,
                popuplayertitle: 'voies_4326',
                interactive: true,
                title: '<img src="styles/legend/voies_4326_2.png" /> voies_4326'
            });
var format_tricolores_4326_3 = new ol.format.GeoJSON();
var features_tricolores_4326_3 = format_tricolores_4326_3.readFeatures(json_tricolores_4326_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tricolores_4326_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tricolores_4326_3.addFeatures(features_tricolores_4326_3);
var lyr_tricolores_4326_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_tricolores_4326_3, 
                style: style_tricolores_4326_3,
                popuplayertitle: 'tricolores_4326',
                interactive: true,
                title: '<img src="styles/legend/tricolores_4326_3.png" /> tricolores_4326'
            });
var format_pharmacies_4326_4 = new ol.format.GeoJSON();
var features_pharmacies_4326_4 = format_pharmacies_4326_4.readFeatures(json_pharmacies_4326_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pharmacies_4326_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_pharmacies_4326_4.addFeatures(features_pharmacies_4326_4);
var lyr_pharmacies_4326_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_pharmacies_4326_4, 
                style: style_pharmacies_4326_4,
                popuplayertitle: 'pharmacies_4326',
                interactive: true,
                title: '<img src="styles/legend/pharmacies_4326_4.png" /> pharmacies_4326'
            });
var format_lampadraies_4326_5 = new ol.format.GeoJSON();
var features_lampadraies_4326_5 = format_lampadraies_4326_5.readFeatures(json_lampadraies_4326_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lampadraies_4326_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lampadraies_4326_5.addFeatures(features_lampadraies_4326_5);
var lyr_lampadraies_4326_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lampadraies_4326_5, 
                style: style_lampadraies_4326_5,
                popuplayertitle: 'lampadraies_4326',
                interactive: true,
                title: '<img src="styles/legend/lampadraies_4326_5.png" /> lampadraies_4326'
            });
var format_carrefours_4326_6 = new ol.format.GeoJSON();
var features_carrefours_4326_6 = format_carrefours_4326_6.readFeatures(json_carrefours_4326_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_carrefours_4326_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_carrefours_4326_6.addFeatures(features_carrefours_4326_6);
var lyr_carrefours_4326_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_carrefours_4326_6, 
                style: style_carrefours_4326_6,
                popuplayertitle: 'carrefours_4326',
                interactive: true,
                title: '<img src="styles/legend/carrefours_4326_6.png" /> carrefours_4326'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_limite_admin_4326_1.setVisible(true);lyr_voies_4326_2.setVisible(true);lyr_tricolores_4326_3.setVisible(true);lyr_pharmacies_4326_4.setVisible(true);lyr_lampadraies_4326_5.setVisible(true);lyr_carrefours_4326_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_limite_admin_4326_1,lyr_voies_4326_2,lyr_tricolores_4326_3,lyr_pharmacies_4326_4,lyr_lampadraies_4326_5,lyr_carrefours_4326_6];
lyr_limite_admin_4326_1.set('fieldAliases', {'id_com': 'id_com', });
lyr_voies_4326_2.set('fieldAliases', {'osm_id': 'osm_id', 'highway': 'highway', 'surface': 'surface', 'ref': 'ref', 'name_fr': 'name_fr', });
lyr_tricolores_4326_3.set('fieldAliases', {'id': 'id', 'etat': 'etat', });
lyr_pharmacies_4326_4.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'healthcare': 'healthcare', 'operator': 'operator', 'name': 'name', 'addr_stree': 'addr_stree', });
lyr_lampadraies_4326_5.set('fieldAliases', {'osm_id': 'osm_id', 'type_potea': 'type_potea', 'puiss_lamp': 'puiss_lamp', 'etat_lamp': 'etat_lamp', 'nbr_lampe': 'nbr_lampe', });
lyr_carrefours_4326_6.set('fieldAliases', {'id': 'id', 'nom': 'nom', 'type': 'type', 'branche': 'branche', });
lyr_limite_admin_4326_1.set('fieldImages', {'id_com': 'Range', });
lyr_voies_4326_2.set('fieldImages', {'osm_id': 'TextEdit', 'highway': 'TextEdit', 'surface': 'TextEdit', 'ref': 'TextEdit', 'name_fr': 'TextEdit', });
lyr_tricolores_4326_3.set('fieldImages', {'id': '', 'etat': '', });
lyr_pharmacies_4326_4.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'healthcare': 'TextEdit', 'operator': 'TextEdit', 'name': 'TextEdit', 'addr_stree': 'TextEdit', });
lyr_lampadraies_4326_5.set('fieldImages', {'osm_id': '', 'type_potea': '', 'puiss_lamp': '', 'etat_lamp': '', 'nbr_lampe': '', });
lyr_carrefours_4326_6.set('fieldImages', {'id': '', 'nom': '', 'type': '', 'branche': '', });
lyr_limite_admin_4326_1.set('fieldLabels', {'id_com': 'no label', });
lyr_voies_4326_2.set('fieldLabels', {'osm_id': 'no label', 'highway': 'no label', 'surface': 'no label', 'ref': 'no label', 'name_fr': 'no label', });
lyr_tricolores_4326_3.set('fieldLabels', {'id': 'no label', 'etat': 'no label', });
lyr_pharmacies_4326_4.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'healthcare': 'no label', 'operator': 'no label', 'name': 'inline label - always visible', 'addr_stree': 'no label', });
lyr_lampadraies_4326_5.set('fieldLabels', {'osm_id': 'no label', 'type_potea': 'no label', 'puiss_lamp': 'no label', 'etat_lamp': 'no label', 'nbr_lampe': 'no label', });
lyr_carrefours_4326_6.set('fieldLabels', {'id': 'no label', 'nom': 'no label', 'type': 'inline label - visible with data', 'branche': 'no label', });
lyr_carrefours_4326_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});