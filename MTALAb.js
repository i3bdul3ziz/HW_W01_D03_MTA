let lines = {
  N : ["Times Square","34th","28th","23rd","Union Square","8th"],
  L : ["8th","6th","Union Square","3rd","1st"],
  Six : ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}

function firstLine(line,station){
  let lineName = line
  let indexOfStation = lineName.indexOf(station)
  let indexOfUnion = lineName.indexOf("Union Square")
  if(indexOfStation > indexOfUnion){
    return stationAndUnion(lineName,indexOfUnion,indexOfStation)
  }
  return lineName.slice(indexOfStation, indexOfUnion + 1)
}

function secondLine(line,station){
  let lineName = line
  let indexOfStation = lineName.indexOf(station)
  let indexOfUnion = lineName.indexOf("Union Square")
  if(indexOfStation < indexOfUnion){
    return stationAndUnion(lineName, indexOfUnion, indexOfStation)
  }
  let r = lineName.slice(indexOfUnion, indexOfStation + 1);
  r.splice(r[indexOfUnion], 1);
  return r;
}

function stationAndUnion(line, indexOfUnion, indexOfStation) {
  if (indexOfStation > indexOfUnion) {
    return line.slice(indexOfUnion, indexOfStation + 1).reverse();
  } else {
    var r = line.slice(indexOfStation, indexOfUnion).reverse();
    r.splice(indexOfUnion, 1);
    console.log(r)
    return r;
  }
}

function sameLine(line, start, end){
  var lineName = line
  var indexOfStart = lineName.indexOf(start)
  var indexOfEnd = lineName.indexOf(end);

  if (indexOfEnd < indexOfStart) {
    return lineName.slice(indexOfEnd, indexOfStart + 1).reverse();
  }
  return lineName.slice(indexOfStart, indexOfEnd + 1);
}

function planTrip(startLine, startStation, endLine, endStation){
  if(startLine === endLine){
    let s = sameLine(startLine, startStation, endStation);
    console.log("You must travel through the following stops on the N line: " + s.slice(1, s.length).join(", ") + ".")
    let stops = s.length -1
    console.log(stops + " stops in total.")
  } else if (startLine !== endLine) {
    let f1 = firstLine(startLine, startStation);
    let f2 = secondLine(endLine, endStation);
    let stops = f1.concat(f2).length - 1 
    console.log("You must travel through the following stops : " + f1.slice(1, f1.length).join(", ") + ".")
    console.log("Your journey continues through the following stops:" + f2.join(", ") + ".")
    console.log("Then change at Union Square")
    console.log(stops + " stops in total")
  } else {
    return "Invalid Parameters.";
  }
}

planTrip(lines.N, "Times Square", lines.Six, "Grand Central")