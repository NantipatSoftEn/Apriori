function getValue() {
    var ItemSetForm = document.getElementById("ItemSet").value;

    var ItemSetFormArr = ItemSetForm.split(",")
    //console.log('ItemSetFormArr', ItemSetFormArr);
    var itemSet = []
    for (let index = 0; index < ItemSetFormArr.length; index++) {
        itemSet[index] = ItemSetFormArr[index].split("-")
    }

    var minSup = document.getElementById("minSup").value;
    //console.log(minSup)
    //   var itemSet = [
    //       ["Apple", "Cereal", "Diapers"],
    //       ["Beer", "Cereal", "Eggs"],
    //       ["Apple", "Beer", "Cereal", "Eggs"],
    //       ["Beer", "Eggs"]
    //   ];
    console.log("itemSet", itemSet);
    itemSetArray1D = changeArrayTo1D(itemSet)
    var Objmode = findMode(itemSetArray1D)
    //console.log(itemSetArray1D)
    //console.log("mode", Objmode)
    var ObjSup = findValueSupportObject(Objmode, itemSet.length, minSup)
    //console.log("valueSup", ObjSup);
    var valueFilterSup = filterWithMinSup(ObjSup, minSup)

    var ArrayOfkeyNames = Object
        .keys(valueFilterSup)
        .sort()
    var ArrayOfMapping = MappingValue(ArrayOfkeyNames)

    //console.log("ArrayOfkeyNames", ArrayOfkeyNames);
    //.log('MappingValue', MappingValue(ArrayOfkeyNames));
    var f = []
    for (var index = 0; index < 3; index++) {
        //console.log('=============Iteration ', index ,'================');

        var ArrayOfIndex = ChangeKeyToIndex(ArrayOfkeyNames);
        //console.log("ArrayOfIndex", ArrayOfIndex);
        var c = combination(ArrayOfIndex)
        //console.log('combone', c);
        var Fstring = filterString(c, index).sort()
        //console.log('filterString', Fstring)
        var TranSectionvalue = checkvalue(ArrayOfMapping, itemSet, Fstring);
        //console.log('TranSectionvalue', TranSectionvalue);

        var ArrSup = FindSupportFormTvalue(TranSectionvalue, itemSet.length, minSup)
        //console.log('ArrSup', ArrSup);
        var ArrIndex = SelectIndexOfArrSupOnMinSup(Fstring, ArrSup, minSup)
        //console.log('InsentValue', ArrIndex);

        var mergValue = merg(ArrSup, ArrIndex);
        //console.log('mergV', mergV);
        f.push(mergValue)

    }
    //console.log('', f);
    const FrequentItemSetFilter = chageObjKeyWhichNumberToName(f, ArrayOfMapping)
    console.log("Frequent itemSet", FrequentItemSetFilter);
    Tohtml(FrequentItemSetFilter)

};



function Tohtml(ArrOfObj) {

    var tableMock = "<table class='table table-bordered'>";
    tableMock += "<tr>";
    tableMock += "<th scope='col'>Frequent itemSet</th>";
    tableMock += "<th scope='col'>Support (%)</th>";
    tableMock += "</tr>";
    for (var i = 0; i < ArrOfObj.length; i++) {
        Object
            .keys(ArrOfObj[i])
            .forEach(function (key) {
                tableMock += "<tr>";
                //console.log('i=', i, " ", ArrOfObj[i][key], " ", key);
                tableMock += "<td>" + key + "</td>";
                tableMock += "<td>" + ArrOfObj[i][key] + "</td>";
                tableMock += "</tr>";
            })

    }
    tableMock += "</table>"
    $("#result").html(tableMock);
}

function findMode(store) {
    distribution = {},
        max = 0,
        result = [];
    store.forEach(function (a) {
        distribution[a] = (distribution[a] || 0) + 1;
        if (distribution[a] > max) {
            max = distribution[a];
            result = [a];
            return;
        }
        if (distribution[a] === max) {
            result.push(a);
        }
    });
    return distribution;
}

function changeArrayTo1D(array2D) {
    var newArr = [];
    for (var i = 0; i < array2D.length; i++) {
        for (var j = 0; j < array2D[i].length; j++) {
            newArr.push(array2D[i][j]);
        }
    }
    return newArr;
}

function findValueSupportObject(Objmode, totalOfTransection, minSup) {
    var result = {}
    Object
        .keys(Objmode)
        .forEach(key => result[key] = (Objmode[key] / totalOfTransection) * 100)
    return result
}

function filterWithMinSup(Objmode, minSup) {
    Object
        .keys(Objmode)
        .forEach(function (key) {
            if (Objmode[key] < minSup) {
                delete Objmode[key]
            }
        })
    return Objmode;
}

function combination(str) {
    const result = [];
    for (let i = 1; i < Math.pow(2, str.length) - 1; i++)
        result.push([...str].filter((_, pos) => (i >> pos) & 1).join(","));
    return result;
}

function filterString(stringArr, AmoutOfcomma) {
    return stringArr.filter(stringArr => (stringArr.match(new RegExp(",", "g")) || []).length == AmoutOfcomma);
}

function ChangeKeyToIndex(Arrkey) {
    for (var i = 0; i < Arrkey.length; i++) {
        Arrkey[i] = i + 1;
    }
    // input ["Apple", "Cereal", "Beer", "Eggs"] output [1, 2, 3, 4]
    return Arrkey;
}

function MappingValue(Arrkey) {
    var newArr = []
    for (var i = 0; i < Arrkey.length; i++) {
        newArr[Arrkey[i]] = i + 1;
    }
    // input ["Apple", "Cereal", "Beer", "Eggs"] output [Apple: 1, Cereal: 2, Beer:
    // 3, Eggs: 4]

    return swap(newArr);
}

function checkvalue(MappingValue, itemSet, Fstring) {
    var TranSectionCount = new Array(Fstring.length).fill(0)
    for (var i = 0; i < Fstring.length; i++) {
        const element = Fstring[i].split(",")
        for (var m = 0; m < itemSet.length; m++) {
            //console.log("=================start new Loop===========");
            var count = new Array(element.length).fill(null)
            for (var n = 0; n < itemSet[m].length; n++) {
                for (var j = 0; j < element.length; j++) {
                    if (itemSet[m][n] == MappingValue[element[j]]) {
                        //console.log(itemSet[m][n], '==', MappingValue[element[j]]);
                        count[j] = true
                    }
                }
            }
            //console.log('count', count);
            if (count.every(returnTrue)) {
                TranSectionCount[i]++
            }
        }
    }
    //console.log('Tcount', TranSectionCount);
    return TranSectionCount
}

function FindSupportFormTvalue(TranSectionArr, totalOfTransection, minSup) {
    for (var index = 0; index < TranSectionArr.length; index++) {
        TranSectionArr[index] = (TranSectionArr[index] / totalOfTransection) * 100
    }
    return TranSectionArr
}

function SelectIndexOfArrSupOnMinSup(Fstring, ArrSup, minSup) {
    var element = new Array(ArrSup.length).fill(null)
    for (let index = 0; index < ArrSup.length; index++) {
        if (ArrSup[index] >= minSup) {
            element[index] = Fstring[index]
        }
    }
    return element
}

function merg(filter2D, InsentValue) {
    var objMerg = {}
    for (var i = 0; i < InsentValue.length; i++) {
        if (InsentValue[i] != null)
            objMerg[InsentValue[i]] = filter2D[i]
    }
    return objMerg
}

function chageObjKeyWhichNumberToName(fArr, MappingValue, ) {
    var result = []
    for (let index = 0; index < fArr.length; index++) {
        var newObj = {}
        //console.log("fArr",fArr[index]);
        Object
            .keys(fArr[index])
            .forEach(function (stringKey) {

                //  console.log('stringKey',stringKey);
                var stringKeyArr = stringKey.split(",")
                // console.log('stringKeyArr',stringKeyArr);
                var keyConnect = ""
                for (var i = 0; i < stringKeyArr.length; i++) {
                    //console.log( "i=",i,MappingValue[stringKeyArr[i]]);
                    keyConnect = keyConnect + MappingValue[stringKeyArr[i]] + ","
                }
                keyConnect = keyConnect.slice(0, -1);
                //console.log('keyConnect',keyConnect);
                newObj[keyConnect] = fArr[index][stringKeyArr]
                // Apple,Cereal: 0
            })
        result.push(newObj)
    }
    return result
}

function returnTrue(value) {
    return value == true
}

function swap(json) {
    var ret = {};
    for (var key in json) {
        ret[json[key]] = key;
    }
    return ret;
}