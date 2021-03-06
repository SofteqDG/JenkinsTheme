(function() {

    var separatorParameterStyle = new SeparatorParameterStyle();
    separatorParameterStyle.init();

    function SeparatorParameterStyle() {
        this.init = function() {
            var _self = this;
            addEventListener('load', function() {
                var parameterBodies = document.querySelectorAll('table.parameters > tbody');
                for (var i = 0; i < parameterBodies.length; i++) {
                    var parameterBody = parameterBodies[i];

                    var settingNameElement = parameterBody.querySelector('.setting-name');
                    if (settingNameElement == null) {
                        continue;
                    }

                    var settingMainElement = parameterBody.querySelector('.setting-main');
                    if (settingMainElement == null) {
                        continue;
                    }

                    var separatorInputElement = settingMainElement.querySelector('div[name="parameter"]').querySelector('input[value^="separator-"]');
                    if (separatorInputElement == null) {
                        continue;
                    }

                    var separatorStyleElements = settingMainElement.querySelectorAll('*');
                    for (var index = 0; index < separatorStyleElements.length; index++) {
                        var clone = separatorStyleElements[index].clone();
                        clone.innerText = null;
                        settingNameElement.appendChild(clone);
                    }
                }
            });
        };
    }

})();