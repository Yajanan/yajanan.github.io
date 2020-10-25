function getMore(userName) {
    var xhr = new XMLHttpRequest();
    xhr.open('get', 'https://api.github.com/users/' + userName + "/repos");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            var data = JSON.parse(xhr.responseText);
            var body = document.getElementsByTagName('tbody');
            for(var i = 0;i < data.length;i++){
                var tr = document.createElement("tr");
                var td_projects = document.createElement("td");
                var a_projects = document.createElement("a");
                var td_descriptions = document.createElement("td");
                a_projects.innerHTML = data[i].name;
                a_projects.href = data[i].html_url;
                a_projects.target = "_blank";

                td_descriptions.innerHTML = data[i].description;

                td_projects.appendChild(a_projects);
                tr.appendChild(td_projects);
                tr.appendChild(td_descriptions);
                body[0].appendChild(tr);
            }
        }
    }
    xhr.send();
}