Paragraph_Array = [];


function submit() {
    var display_student_array = [];

    for (var j = 1; j <= 4; j++) {
        var Name_Of_The_Student = document.getElementById("Paragraph_" + j).value;
        console.log(Name_Of_The_Student);
        Paragraph_Array.push(Name_Of_The_Student);
    }

    console.log(Paragraph_Array);

    var lenght_of_name_of_students_array = Paragraph_Array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array.push("<h4 id='name'>NAME - " + Paragraph_Array[k] + "</h4>");
        console.log(display_student_array);
    }

    console.log(display_student_array);
    document.getElementById("display_name_with_commas").innerHTML = display_student_array;

    var remove_commas = display_student_array.join(" ");
    console.log(remove_commas);
    document.getElementById("display_name_without_commas").innerHTML = remove_commas;


    document.getElementById("Submit_button").style.display = "none";
    document.getElementById("Sort_button").style.display = "inline-block";

}

function sorting() {
    Paragraph_Array.sort();
    console.log(Paragraph_Array);

    var display_student_array_sorting = [];

    var lenght_of_name_of_students_array = Paragraph_Array.length;
    console.log(lenght_of_name_of_students_array);

    for (var k = 0; k < lenght_of_name_of_students_array; k++) {
        display_student_array_sorting.push("<h4>NAME - " + Paragraph_Array[k] + "</h4>");
        console.log(display_student_array_sorting);
    }

    var remove_commas = display_student_array_sorting.join(" ");
    console.log(remove_commas);

    document.getElementById("display_name_without_commas").innerHTML = remove_commas;
}


