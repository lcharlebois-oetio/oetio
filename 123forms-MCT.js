"(function(){

window.addEventListener('load', function(){

var sourceControlId = 41171190, /** THE ID OF THE SENDER CONTROL */

targetControlId = 41171191, /** THE ID OF THE RECEIVER CONTROL **/

sourceControlInstance = loader.getEngine().getDocument().getElementById(93878406-1),

targetControlInstance = loader.getEngine().getDocument().getElementById(93878624-1);

sourceControlInstance.on('value-change', function(){

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

targetControlInstance.setValue( sourceControlInstance.getValue() );

});

})();" 
