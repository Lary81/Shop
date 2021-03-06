  var MAX_ZOOM_IN = 2.0;
  var MAX_ZOOM_OUT = 0.2;
  var zoomStep = 0.2;
  var actualZoomLevel = 1.0;
  var MOVE_STEP = 100;
  var nodes, nodes_data, zoomable_layer, zoom;

  var map = d3.select("#map")
    .attr("width", 960)
    .attr("height", 450);

  var container = map.append("g");

  //Get the background image from the server and set the viewport size
  var mapImage = container.append("image")
    .attr("xlink:href","http://wafi.iit.cnr.it/webvis/tmp/tiger.svg")
    .attr("width", 960)
    .attr("height", 450);

  //Draw two circles and one rectangle
  var circle1 = container.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 50)
    .style("fill", "#ff0")
    .classed('draggable', true);
  var circle2 = container.append("circle")
    .attr("cx", 50)
    .attr("cy", 50)
    .attr("r", 50)
    .style("fill", "#ae2")
    .classed('draggable', true);
  var rectangle = container.append("rect")
    .attr("x", 50)
    .attr("y", 50)
    .attr("width", 100)
    .attr("height", 50)
    .attr("stroke", "#C1272D")
    .attr("stroke-width", 5)
    .style("fill", "#F7931E")
    .classed('draggable', true);


  //Create the zoom behavior to set for the draw
  zoom = d3.behavior.zoom().scaleExtent([MAX_ZOOM_OUT, MAX_ZOOM_IN]).on('zoom', zoomed);

  //Function called on the zoom event. It translate the draw on the zoommed point and scale with a certain factor
  function zoomed() {
    container.attr("transform", "translate(" + d3.event.translate + ")scale(" + d3.event.scale + ")");
  }

  //Create the drag and drop behavior to set for the objects crated
  var drag = d3.behavior.drag()
    .origin(function(d) { return d; })
    .on("dragstart", dragstarted)
    .on("drag", dragged);

  //Called when drag event starts. It stop the propagation of the click event
  function dragstarted(d){
    d3.event.sourceEvent.stopPropagation();
  }

  //Called when the drag event occurs (object should be moved)
  function dragged(d){
    d.x = d3.event.x;
    d.y = d3.event.y;
    //Translate the object on the actual moved point
    d3.select(this).attr({
      transform: "translate(" + d.x + "," + d.y + ")"
    });
  }

  //Set the zoom behavior on the container variable (the draw), disable mousedown event for the zoom and set the function to call on the double click	event
  container.call(zoom).on("mousedown.zoom", null).on("dblclick.zoom", zoomIn);

  //Matrix containing the x and y coordinates of the created objects (used for draggable events)
  nodes_data = [
    {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }, {
      x: 0,
      y: 0
    }
  ];


  //Set the drag behavior on the objects having the "draggable" class and set their position on the viewport (by the "node_data" matrix)
  nodes = container.selectAll(".draggable").call(drag).data(nodes_data);

  function zoomIn(){
    //Calculate and set the new zoom level
    actualZoomLevel = roundFloat(parseFloat(actualZoomLevel) + parseFloat(zoomStep));
    zoom.scale(actualZoomLevel);
    //Get the actual position of the container
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    //Esecute the transformation setting the actual position and the new zoom level
    container.attr("transform", "translate(" + xPosition + ", " + yPosition + ")scale(" + zoom.scale() + ")");
  }

  function zoomOut(){
    actualZoomLevel = roundFloat(parseFloat(actualZoomLevel) - parseFloat(zoomStep));
    zoom.scale(actualZoomLevel);
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    container.attr("transform", "translate(" + xPosition + ", " + yPosition + ")scale(" + zoom.scale() + ")");
  }

  function moveDrawLeft(){
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    container.attr("transform", "translate(" + (xPosition - MOVE_STEP) + ", " + yPosition + ")scale(" + zoom.scale() + ")");
  }

  function moveDrawRight(){
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    container.attr("transform", "translate(" + (xPosition + MOVE_STEP) + ", " + yPosition + ")scale(" + zoom.scale() + ")");
  }

  function moveDrawTop(){
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    container.attr("transform", "translate(" + xPosition + ", " + (yPosition - MOVE_STEP) + ")scale(" + zoom.scale() + ")");
  }

  function moveDrawBottom(){
    var xPosition = d3.transform(container.attr("transform")).translate[0];
    var yPosition = d3.transform(container.attr("transform")).translate[1];
    container.attr("transform", "translate(" + xPosition + ", " +(yPosition + MOVE_STEP) + ")scale(" + zoom.scale() + ")");
  }

  function roundFloat(value){
    return value.toFixed(2);
  }
