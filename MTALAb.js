let lines = {
    n : "N",
    s : "Six",
    l : "L",
    nLine : ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],
    lLine : ["8th", "6th", "Union Square", "3rd","1st"],
    sixLine : ["GC","33rd", "28th", "23rd", "Union Square", "AP"],
    changePoint :"Union Square"
  }
 function planTrip(start,init,eName,final){
    let indexOfUnion
    let count = 1
    let str = ""
    let str2 = ""
    let b
    let index
    if( start === lines.n && init === lines.nLine[0] ){
      if(eName === lines.l && final === lines.lLine[lines.lLine.length - 1]){
        for(let i = 0; i < lines.nLine.length; i++){
         b = lines.nLine.includes("Union Square")
         if(b === true){
            for( let j = 0; j < lines.lLine.length; j++){
               b = lines.lLine.includes("Union Square")
               if(b === true){
                  index = j - 1
                  str2 = lines.lLine.slice(index, lines.lLine.length)
                  count = j
               }
            }
            indexOfUnion = lines.nLine.indexOf(i) 
            str = lines.nLine.slice(0, indexOfUnion)
          count = count + i - 2
         }
        }
      } else if(eName === lines.s && final === lines.sixLine[lines.sixLine.length - 1]){
        count = 1
        for(let i = 0; i < lines.nLine.length; i++){
          b = lines.nLine.includes("Union Square")
          if(b === true){
            for( let j = 0; j < lines.sixLine.length; j++){
              b = lines.sixLine.includes("Union Square")
              if(b === true){
                index = j 
                str2 = lines.sixLine.slice(index, lines.sixLine.length)
                count = j
              }
            }
            indexOfUnion = lines.nLine.indexOf(i) 
            str = lines.nLine.slice(0, indexOfUnion)
            count = count + i - 4
          }
        }
      }
    } else if ( start === lines.l && init === lines.lLine[0] ){
      if(eName === lines.n && final === lines.nLine[lines.nLine.length - 1]){
        for(let i = 0; i < lines.lLine.length; i++){
         b = lines.lLine.includes("Union Square")
         if(b === true){
            for( let j = 0; j < lines.nLine.length; j++){
               b = lines.nLine.includes("Union Square")
               if(b === true){
                  index = j 
                  str2 = lines.nLine.slice(index, lines.nLine.length)
                  count = j
               }
            }
            indexOfUnion = lines.lLine.indexOf(i) 
            str = lines.lLine.slice(0, indexOfUnion - 1)
          count = count + i - 5
         }
        }
      } else if(eName === lines.s && final === lines.sixLine[lines.sixLine.length - 1]){
        count = 1
        for(let i = 0; i < lines.lLine.length; i++){
          b = lines.lLine.includes("Union Square")
          if(b === true){
            for( let j = 0; j < lines.sixLine.length; j++){
              b = lines.sixLine.includes("Union Square")
              if(b === true){
                index = j 
                str2 = lines.sixLine.slice(index, lines.sixLine.length)
                count = j
              }
            }
            indexOfUnion = lines.lLine.indexOf(i) 
            str = lines.lLine.slice(0, indexOfUnion - 1)
            count = count + i - 5
          }
        }
      }
    } else if ( start === lines.s && init === lines.sixLine[0] ){
        if(eName === lines.n && final === lines.nLine[lines.nLine.length - 1]){
          for(let i = 0; i < lines.sixLine.length; i++){
            b = lines.sixLine.includes("Union Square")
            if(b === true){
              for( let j = 0; j < lines.nLine.length; j++){
                b = lines.nLine.includes("Union Square")
                if(b === true){
                  index = j 
                  str2 = lines.nLine.slice(index, lines.nLine.length)
                  count = j
                }
              }
              indexOfUnion = lines.sixLine.indexOf(i) 
              str = lines.sixLine.slice(0, indexOfUnion)
              count = count + i - 4
            }
          }
        } else if(eName === lines.l && final === lines.lLine[lines.lLine.length - 1]){
          count = 1
          for(let i = 0; i < lines.sixLine.length; i++){
            b = lines.sixLine.includes("Union Square")
            if(b === true){
            for( let j = 0; j < lines.lLine.length; j++){
              b = lines.lLine.includes("Union Square")
              if(b === true){
                index = j 
                str2 = lines.lLine.slice(index, lines.lLine.length)
                count = j
              }
            }
            indexOfUnion = lines.sixLine.indexOf(i) 
            str = lines.sixLine.slice(0, indexOfUnion )
            count = count + i - 3
          }
        }
      }
    }
    console.log("You must travel through the following stops on the " + start + " line: " + str + ".")
    console.log("Change at " + lines.changePoint)
    console.log("Your journey continues through the following stops: " + str2 + ".")
    console.log(count + " stops in total.")
 }
  
  planTrip("N","Times Square","L","1st")
  planTrip("N","Times Square","Six","AP")
  planTrip("L","8th","N","8th")
  planTrip("L","8th","Six","AP")
  planTrip("Six","GC","N","8th")
  planTrip("Six","GC","L","1st")