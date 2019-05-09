let x=0;
let A=[];
let B=[];
function user_input() {
    A[x]=document.getElementById("foruser").value;
    B[x]=document.getElementById("foruser").value;
    x++;
    document.getElementById("foruser").value="";
}
function user_result() {
    document.getElementById("result").innerHTML= "Mang dao nguoc la " + "Array_Reverse " + "= " + "[" + A + "]";
}
function reverse_array() {
    let last = B.length - 1;
    for (let first = 0; first < last; first++) {
        let y = A[first];
        B[first] = A[last];
        B[last] = y;
        last--;
        }
    document.getElementById("reverse_result").innerHTML = "Mang dao nguoc la " + "Array_Reverse " + "= " + "[" + B + "]";
}