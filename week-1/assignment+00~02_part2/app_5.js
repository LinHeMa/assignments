// import _ from lodash;

// console.log(_.compact([0, 1, false, 2, "", 3]));
// const students = [
//   { student_id: 1, name: "Arthur" },
//   { student_id: 2, name: "Peter" },
//   { student_id: 3, name: "Molly" },
// ];

// const student_objects = [
//   { student_id: 1, object: "pen" },
//   { student_id: 2, object: "pen" },
//   { student_id: 3, object: "book" },
//   { student_id: 1, object: "book" },
//   { student_id: 3, object: "phone" },
// ];

// function practice_6(students, student_objects) {
//   const student_objects_new = student_objects.reduce((obj, item, i, array) => {
//     obj[item.student_id] = obj[item.student_id] || [];
//     obj[item.student_id].push(item.object);
//     console.log("this is obj ", obj);
//     return obj;
//   }, {});
//   const answer = students.map((element) => ({
//     ...element,
//     object: [...student_objects_new[element.student_id]],
//   }));
//   return answer;

const students = [
  { student_id: 1, name: "Arthur" },
  { student_id: 2, name: "Peter" },
  { student_id: 3, name: "Molly" },
];

const student_objects = [
  { student_id: 1, object: "pen" },
  { student_id: 2, object: "pen" },
  { student_id: 3, object: "book" },
  { student_id: 1, object: "book" },
  { student_id: 3, object: "phone" },
];

const result = (students, student_objects) => {
  const reorganized = student_objects.reduce(
    (accumu, { student_id, object }) => {
      accumu[student_id] = [...(accumu[student_id] ?? ""), object];
      return accumu;
    },
    {}
  );
  return students.map((student) => ({
    ...student,
    object: reorganized[student.student_id],
  }));
};

console.log(result(students, student_objects));
result(students, student_objects).forEach((r) =>
  console.log(JSON.stringify(r))
);

// }

// console.log(practice_6(students, student_objects));

// console.log(practice_7(students, student_objects));
