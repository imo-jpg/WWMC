console.log("helllow wird");

// console.log(edges[0][0].getBoundingClientRect());
function addFilmEdges() {
    let edges = d3.selectAll(".film_edge");

    console.log((edges[0][0]));

    for (let i = 0; i < edges[0].length; i++) {
        console.log(i);
        let stats = edges[0][i].getBoundingClientRect();
        console.log(stats.height);
        for (let j = 0; j < stats.height/35; j++) {
            let div = document.createElement("div");
            div.className = "film_gap";
            edges[0][i].append(div);
        }
    };
};

addFilmEdges();

