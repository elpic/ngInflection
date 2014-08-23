angular.module('ngInflection', [])
	.filter('indexOf', function () { return inflection.indexOf; })
	.filter('pluralize', function () { return inflection.pluralize; })
	.filter('singularize', function () { return inflection.singularize; })
	.filter('inflect', function () { return inflection.inflect; })
	.filter('camelize', function () { return inflection.camelize; })
	.filter('underscore', function () { return inflection.underscore; })
	.filter('humanize', function () { return inflection.humanize; })
	.filter('capitalize', function () { return inflection.capitalize; })
	.filter('dasherize', function () { return inflection.dasherize; })
	.filter('titleize', function () { return inflection.titleize; })
	.filter('demodulize', function () { return inflection.demodulize; })
	.filter('tableize', function () { return inflection.tableize; })
	.filter('classify', function () { return inflection.classify; })
	.filter('foreign_key', function () { return inflection.foreign_key; })
	.filter('ordinalize', function () { return inflection.ordinalize; })
	.filter('transform', function () { return inflection.transform; });
