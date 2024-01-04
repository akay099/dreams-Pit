var singleSpaRef;
var dashboardLoaded = false;
var activeTab;
var noLoaderApps = ['career']

function loadDashboard(){
    console.log("loading dashboard...");
    if(activeTab !== 'dashboard'){
        activeTab = 'dashboard';
        if(!dashboardLoaded){
            System.import('single-spa').then(function(singleSpa){
                singleSpaRef = singleSpa;
                registerApps(['menu']);
                dashboardLoaded = true;
            });
        }
    }
}

function registerApps(apps){
    $.each(apps, function(index, appName) {
        singleSpaRef.registerApplication(
            appName,
            // loadApp(appName),
            function(location){
                let res;
                if(location.pathname.startWith(appName)){
                    res = false;
                } else {
                    res = true;
                }
                return res;
            }
        )
    });
    singleSpaRef.start();
}

function loadApp(){
    return Promise.resolve().then(() => {
        if(noLoaderApps.includes(appName)){
            toggleAppLoader(false);
        } else {

        }
        return System.import(appName)
    }).then(app => {
        toggleAppLoader(false);
        return app;
    }).catch((error) => {
        console.log("Promise rejected");
    })
}

function toggleAppLoader(status){
    switch(activeTab){
        case 'career':
            {
                document.getElementById('appLoader').style.visibility = 'hidden';
                break;
            }
        default:
            {
                document.getElementById('appLoader').style.visibility = 'hidden';
                break;
            }
    }
}