import { Person } from './person';

class Student extends Person{
    study() : string {
        return `${this.name} is um....`;
    }
}

const student = new Student('AKA');

console.log(student.sayHello());
console.log(student.study());

// 다음과 같이 한 뒤에 tsc 명령어를 실행한다면 모든 코드가 다 JS로 번역이 된다