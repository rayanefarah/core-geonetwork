(function() {
  goog.provide('gn_search');


  goog.require('gn_formatter_lib');
  goog.require('gn_map_field_directive');
  goog.require('gn_mdactions');
  goog.require('gn_mdview');
  goog.require('gn_module');
  goog.require('gn_resultsview');
  goog.require('gn_search_controller');
  goog.require('gn_viewer');

  var module = angular.module('gn_search', [
    'gn_module',
    'gn_resultsview',
    'gn_map_field_directive',
    'gn_search_controller',
    'gn_viewer',
    'gn_mdview',
    'gn_mdactions',
    'ui.bootstrap.buttons',
    'ui.bootstrap.tabs',
    'ngeo'
  ]);

  module.constant('gnSearchSettings', {});
  module.constant('gnViewerSettings', {});

  module.config(['$LOCALES', function($LOCALES) {
    $LOCALES.push('search');
    $LOCALES.push('/../api/0.1/tools/i18n/db?type=MetadataCategory');
    $LOCALES.push('/../api/0.1/standard/iso19139/' +
        'codelists/gmd%3AMD_TopicCategoryCode');
  }]);

})();
