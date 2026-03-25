function addClass(element, classToAdd) {
        var currentClassValue = element.className;
        if (currentClassValue.indexOf(classToAdd) == -1) {
            if ((currentClassValue == null) || (currentClassValue === "")) {
                element.className = classToAdd;
            } else {
                element.className += " " + classToAdd;
            }
        }
    }

    function removeClass(element, classToRemove) {
        var currentClassValue = element.className;
        if (currentClassValue == classToRemove) {
            element.className = "";
            return;
        }
        var classValues = currentClassValue.split(" ");
        var filteredList = [];
        for (var i = 0 ; i < classValues.length; i++) {
            if (classToRemove != classValues[i]) {
                filteredList.push(classValues[i]);
            }
        }
        element.className = filteredList.join(" ");
    }
    
    function toggleClass(element, classToToggle){
        if (!element || !classToToggle){
            return;
        }
        var classString = element.className, nameIndex = classString.indexOf(classToToggle);
        if (nameIndex == -1) {
            classString += ' ' + classToToggle;
        }
        else {
            classString = classString.substr(0, nameIndex-1);// + classString.substr(nameIndex+classToToggle.length);
            //alert(classString);
        }
        element.className = classString;
    }

    /*
    // EXAMPLE:
    document.querySelector(".js").addEventListener('click', function() {
        toggleClass(document.querySelector(".js"), 'red');
    });
    */  