const allTabs = ['dashboardTab','careerTab']
document.addEventListener("tabLoaded", function(e){
    console.log("Tab loaded : ", e.detail);
    if(e.detail === 'dashboard'){
        if(window.location.pathname !== '/' || window.location.hash === '#dashboardTab'){
            var targetUrl = window.location.origin;
            targetUrl = `${targetUrl}/`;
            window.history.replaceState(null, '', targetUrl);
        }
        loadDashboard();
    }
})