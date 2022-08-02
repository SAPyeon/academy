/**
 * 
 */
window.onload = function () {
	const create_id = document.querySelector('#create_id');
	//id유효성검사
	create_id.addEventListener('blur', () => {
		const idmsg = document.querySelector('#idMsg');
		const regExp = /^[a-z]{1}[a-z0-9-_]{4,19}$/g;
		if (regExp.test(create_id.value)) {
			idmsg.innerHTML = "사용할 수 있는 아이디입니다.";
			idmsg.style.color = 'green';
		} else {
			idmsg.innerHTML = "5~20자의 영어 소문자,숫자만 입력하세요.";
			idmsg.style.color = 'red';
		}
	});

	const create_pw = document.querySelector('#create_password');
	//pw유효성검사
	create_pw.addEventListener('blur', () => {
		const pswmsg = document.querySelector('#pswMsg');
		const regExp = /^[a-zA-Z0-9\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]{8,16}$/g;
		if (regExp.test(create_pw.value)) {
			pswmsg.innerHTML = "사용할 수 있는 비밀번호입니다.";
			pswmsg.style.color = 'green';
		} else {
			pswmsg.innerHTML = "8~16글자의 영어 대소문자,특수문자만 가능합니다.";
			pswmsg.style.color = 'red';
		}
	});

	const correct_pw = document.querySelector('#correct_password');
	//pw재확인
	correct_pw.addEventListener('blur', () => {
		const psw2msg = document.querySelector('#psw2Msg');
		if (create_pw.value === correct_pw.value) {
			psw2msg.innerHTML = "비밀번호와 같습니다.";
			psw2msg.style.color = 'green';
		} else {
			psw2msg.innerHTML = "비밀번호와 다릅니다.";
			psw2msg.style.color = 'red';
		}
	});

	//select선택시 input에 넣기
	const email = document.querySelector('#select_email');
	email.addEventListener('change', () => {
		const epub = document.querySelector('#email_pub');
		epub.value = email.options[email.selectedIndex].value;
	})

	//전체동의
	const allcheck = document.querySelector('#allcheck');
	const agreement = document.querySelectorAll('.agreement');

	function makeAllCheck(a, b) {
		for (let check of b) {
			//console.log(b.length)
			a.addEventListener('input', () => {
				if (a.checked === true) {
					check.checked = true;
				} else {
					check.checked = false;
				}
			})
			check.addEventListener('change', () => {
				const query = 'input[name = "check"]:checked';
				getCheckedCnt(query);
				//console.log(selectedElementsCnt)
				if (b.length === selectedElementsCnt) {
					a.checked = true;
				}
				else if (check.checked === false) {
					a.checked = false;
				}
			})
		}
	}

	makeAllCheck(allcheck, agreement);

	//체크된 갯수세기
	function getCheckedCnt(query) {
		const selectedElements = document.querySelectorAll(query);
		selectedElementsCnt = selectedElements.length;
		//console.log(selectedElementsCnt)
		return selectedElementsCnt;
	}

	const m_allcheck = document.querySelector('#check_05');
	const checkmarket = document.querySelectorAll('.marketchk');

	//makeAllCheck(marketcheckall, checkmarket);
	for (let value of checkmarket) {
		m_allcheck.checked = true;
		if (m_allcheck.checked === true) {
			value.checked = true;
		}
		m_allcheck.addEventListener('change', () => {
			if (m_allcheck.checked === true) {
				value.checked = true;
			} else {
				value.checked = false;
			}
		})
		//마케팅체크
		value.addEventListener('change', () => {
			const query = 'input[name = "check2"]:checked';
			getCheckedCnt(query);
			if (selectedElementsCnt === 0) {
				m_allcheck.checked = false;
			} else if (selectedElementsCnt === 3) {
				m_allcheck.checked = true;
			}
		})

	}
}


























