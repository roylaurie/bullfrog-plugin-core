define(
	'bullfrog/service/APlugin'
), (
	APlugin
) {

function VoterPlugin = function(bullfrogService) {
	this._service = bullfrogService;
};

VoterPlugin.prototype = Object.create(APlugin.prototype);
VoterPlugin.prototype.constructor = VoterPlugin;

VoterPlugin.prototype.init = function() {
	this.getBlockEmitter.on(function(block) {
	});
};

VoterPlugin.prototype.start = function() {
};

VoterPlugin.prototype.stop = function() {
};

return VoterPlugin;
)};
