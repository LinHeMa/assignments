console.log("Q1 starts here!!!");

const input1 = ["a", "b", "c", "a", "c", "a"];
function practice_1(input) {
  const obj = input.reduce((a, v) => ({ ...a, [v]: 0 }), {});

  for (let i = 0; i < input.length; i++) {
    obj[input[i]]++;
  }
  return obj;
}

console.log(practice_1(input1));
// 必須要多加注意
// const o = {};
// console.log({ a: 0, ...o });

console.log("Q2 starts here!!!");

const arr = ["a", "b", "c", "a", "b"];
const mapping = {
  a: 1,
  b: 2,
  c: 3,
};
function practice_2(input, mapping) {
  return input.map((x) => mapping[x]);
}
console.log(practice_2(arr, mapping));

console.log("Q3 starts here!!!");

const input3 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];
function practice_3(input) {
  let object = input.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: [] }),
    {}
  );
  for (let i = 0; i < input.length; i++) {
    if (input[i].key in object) {
      object[input[i].key].push(input[i].value);
    }
  }
  return object;
}
// function practice_3(input) {
//   const object = input.reduce((obj, item) => {
//     obj[item.key] = obj[item.key] || [];
//     obj[item.key].push(item.value);
//     return obj;
//   }, {});
//   return object;
// }
console.log(practice_3(input3));

console.log("Q4 starts here!!!");

const input4 = [
  { key: "a", value: 3 },
  { key: "b", value: 1 },
  { key: "c", value: 2 },
  { key: "a", value: 3 },
  { key: "c", value: 5 },
];

//第四題原版
function practice_4(input) {
  let object = input.reduce(
    (obj, item) => Object.assign(obj, { [item.key]: 0 }),
    {}
  );
  for (let i = 0; i < input.length; i++) {
    if (object.hasOwnProperty(input[i].key)) {
      object[input[i].key] += input[i].value;
    }
  }
  return object;
}
console.log(practice_4(input4));
console.log("Q5 starts here!!!");
const objectTest = { student_id: 0, name: "", object: [] };

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

function practice_5(students, student_objects) {
  students.forEach((ele) => (ele.object = []));
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < student_objects.length; j++) {
      if (student_objects[j].student_id === students[i].student_id) {
        students[i].object.push(student_objects[j].object);
      }
    }
  }
  return students;
}
console.log(practice_5(students, student_objects));

// 改;
const practice_5_beta = (students, student_objects) => {
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

console.log(practice_5_beta(students, student_objects));
