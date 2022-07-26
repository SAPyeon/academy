/**
 * 
 */
window.onload = function(){ //crud
	const btn = document.querySelector('#btn'); //버튼
	const list = document.querySelector('#list');//인풋 텍스트 변수 list
	const todolist = document.querySelector('#todolist');//ul태그 변수 todolist
	
	btn.addEventListener('click', function(e){ //클릭이벤트
		e.preventDefault();
		var li = document.createElement('li'); //li 요소를 넣은 변수 li
		var replace = document.createElement('button')//button 요소를 넣은 변수
		if(list.value==''){ //인풋텍스트가 비어있다면
			alert('입력하세요') //알림창을 띄워라
		}else{
			li.innerText = list.value; // li값에 인풋텍스트값 넣기
			todolist.appendChild(li); //
			list.value = ""; // 초기화
			//교체하는 버튼
			replace.innerText = "수정"
			li.appendChild(replace);	
		}
		replace.addEventListencer('click',function(e){
			e.preventDefault();
			li.innerText = "";
			li.innerText = list.value;
		})
		
		li.addEventListener('click',function(){
			li.style.textDecoration = 'line-through';
		})
		li.addEventListener('dblclick',function(){
			todolist.removeChild(li);
		})		
	})
		
	
	
	
}