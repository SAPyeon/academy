/**
 * 
 */
/*
 * console.log("HELLO!!!!..."); //첫번째 setTimeout(()=>{ console.log("...are you
 * still there?");//3초 뒤 세번째(마지막)으로 반환 },3000) console.log("GOODBYE!!")//두번째
 * 
 * const scores = [ {name:'Kim', KO:100, Eng:80}, {name:'Lee', KO:60, Eng:70},
 * {name:'Song', KO:80, Eng:65}, {name:'Park', KO:95, Eng:90}, {name:'Ra',
 * KO:55, Eng:40}, {name:'Shin', KO:45, Eng:80}, {name:'Kang', KO:95, Eng:100}, ]
 * 
 * const Koreanscores = scores.map(K=>K.KO); //[100, 60, 80, 95, 55, 45, 95 ]
 * console.log(Koreanscores[2]); //80
 * 
 * 
 * const goodKOscore = scores.filter(K=>K.KO>90) //0: {name: 'Kim', KO: 100,
 * Eng: 80} //1: {name: 'Park', KO: 95, Eng: 90} //2: {name: 'Kang', KO: 95,
 * Eng: 100} //length: 3
 * 
 * const goodstudents = goodKOscore.map(K=>K.name) //['Kim','Park','Kang'];
 * 
 * //filter와 map함께 적용 const goodKOstudents =
 * scores.filter(K=>K.KO>90).map(K=>K.name)//["Kim", "Park", "Kang"]
 * //['Kim','Park','Kang'];
 * 
 * 
 * //reduce메서드사용 const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] const sum =
 * number.reduce((a,b)=>a+b); //55 //최소값 구하기 const minnum =
 * number.reduce((min,num)=>{ if(min<num){ return min }return num });//1 //최대값
 * 구하기 const maxnum = number.reduce((max,num)=>{ if(max<num){ return num
 * }return max });//10
 * 
 * //디폴트 매개변수 function greet(b,a="hi"){ console.log(a,b); }
 * 
 * //spread문법 const arr1 = [{name:'aa', age:10, }, {name:'bb', age:12}]; const
 * arr2 = [...arr1, {name:'cc', age:14}];
 * 
 * console.log(arr2); //0: {name: 'aa', age: 10} //1: {name: 'bb', age: 12} //2:
 * {name: 'cc', age: 14} //length: 3
 * 
 * setTimeout(()=>{ console.log("bye")},4000)
 */

/*
 * function selectAll(selectAll) {
 *  const checkboxes =
 * document.querySelectorAll('input[name="animal"]');
 * 
 * checkboxes.forEach((A) => { A.checked = selectAll.checked }) }
 */
window.onload = function() {
	// 전체체크박스 불러옴
	const a = document.querySelector('#chk');
	// 네임이 "animal"인 체크박스를 불러옴
	const checkboxes = document.querySelectorAll('input[name="animal"]');
	const checked = document.querySelectorAll('input[name = "animal"]:checked');
	// 전체선택 체크박스 클릭시 전체선택
	a.onclick = function() {
		if (a.checked == true) {
			for (let value of checkboxes) {
				value.checked = true;
			}
		}else{
			for (let value of checkboxes) {
				value.checked = false;
			}
		}
	}
	checked.onclick = function() {
		if (checked.checked = false) {
			a.checked = false;
		}else{
			a.checked = true;
		}
	}

	// const b = document.querySelectorAll('.animal');

	/*
	 * // @command 전체선택 function allCheckedBox(obj) { // @brief 선택한 체크박스의 클래스
	 * 명칭을 가져온다. const termClass = obj.getAttribute("class"); // @brief 선택한
	 * 클래스명과 같은 클래스의 갯수
	 * console.log(document.getElementsByClassName(termClass).length);
	 * Array.prototype.forEach.call(document.getElementsByClassName(termClass),
	 * function(element, index, array) { // @brief 엘리먼트의 값 출력
	 * console.log(element.value); // @brief 선택한 클래스의 첫번째 checkbox의 상태가 체크가 되있는
	 * 경우 if(document.getElementsByClassName(termClass)[0].checked == true) { //
	 * @brief 같은 클래스명을 가진 모든 checkbox의 상태를 선택 완료 처리 한다. element.checked = true; } //
	 * @brief 선택한 클래스의 첫번째 checkbox의 상태가 체크가 해제된 경우 else { // @brief 같은 클래스명을 가진
	 * 모든 checkbox의 상태를 선택 해제 처리 한다. element.checked = false; }
	 * 
	 * }); } // @command 개별 선택이 이루어진 경우에 전체값 체크의 예외처리 function
	 * eachCheckedBox(obj) { // @brief 선택한 체크박스의 상태가 선택해제인 경우 if(obj.checked ==
	 * false) { // @brief 선택한 체크박스의 클래스 명칭을 가져온다. const termClass =
	 * obj.getAttribute("class"); // @brief 첫번째 checkbox의 상태가 체크가 되어있는경우
	 * if(document.getElementsByClassName(termClass)[0].checked == true) { //
	 * @brief 첫번째 checkbox의 상태를 체크해제한다.
	 * document.getElementsByClassName(termClass)[0].checked = false; } } }
	 */

}
