
# NoFolio

## Project setup
```
npm install
```
### Compiles and hot-reloads for development
```
npm run serve
```
### **Installation Process**
```
npm install vue
npe install -g @vue/cli
```

## **주제**
#### 쉽고 빠른 포트폴리오 제작 서비스
### **개요**
> - **매년 증가하는 청년(15~29세) 실업률(9.9%, 2019.05 기준)을 보면 우리나라 청년은 어려운 길 위에 놓여있다** 
> **특히 전문적인 분야로의 취직을 위해서는 포트폴리오 작성의 중요성이 더 두드러진다.**
> - **기업은 원하는 능력을 지닌 개발자를 찾는데 시간적/금전적 비용을 지출하고 있다.**
### **현황 및 문제점**
> -  ### **스스로 디자인해야 하는 포트폴리오**
> #### 유명 취업전문 사이트의 이력서쓰기 기능을 들여다보면, 포트폴리오를 개인적으로 작성 후 첨부하여서 붙이는 식으로 되어있다. 
> 
> -  ### **많은 프로세스**
> #### 타 사이트에선 포트폴리오를 실제로 작성하기까지 비교적 많은 프로세스를 요구한다. 
### **활용성**
> -  ### **Form을 채우기만 하면 포트폴리오 완성**
> #### 유명 취업전문 사이트의 이력서쓰기 기능을 들여다보면, 포트폴리오를 개인적으로 작성 후 첨부하여서 붙이는 식으로 되어있다.
> #### 이력서를 쓰고 포트폴리오도 따로 작성해야 하는 시간적 비용이 든다.
> -  ### **간단한 프로세스**
> #### 바로 이력서 입력 폼을 채워 볼 수 있고, GitHub과 연동하여 원하는 프로젝트의 정보를 가져와서 추가 할 수 있다.
> - ### **한눈에 알아볼 수 있는 개발자 능력치**
>  #### 이 지표를 통해 개발자의 역량을 신뢰할만한 데이터로 보다 쉽게 파악할 수 있다.
### **기대효과**
> - ### **개발자의 능력 어필**
>  ####  개발자가 어느 정도의 개발 능력치를 가지고 있는지 확인이 가능하고, 어느 부분에서 많은 경험을 해보았는지 한눈에 알아볼 수 있다.
> - ### **기업의 쉬운 개발자 채용**
>  #### 개발자가 자신의 개발 능력치를 잘 표현하게 됨에 따라서, 기업도 적은 비용으로 원하는 능력치의 개발자를 채용하기 편해진다.

## **기능 설계**
### 0. 화면 정의서

메인 화면 정의서: [https://ovenapp.io/view/p6FUOL91qcHhYv5iY6H56LqTK8ZHKEEf/xdJsm](https://ovenapp.io/view/p6FUOL91qcHhYv5iY6H56LqTK8ZHKEEf/xdJsm)

프로젝트 테마 화면 정의서: [https://ovenapp.io/view/C8SMc4QWVo2UAyzmeh344UAxluCUl3hK/DPIpM](https://ovenapp.io/view/C8SMc4QWVo2UAyzmeh344UAxluCUl3hK/DPIpM)

## **기능 설명**
### 0. 프레젠테이션

pdf 업로드 후 추가해야함...

### 1.  로그인 전

![>](https://drive.google.com/uc?id=1dnbhmcUYk6OhwoAPhiykjqMpzVLbtu9t)
>작성하고자 하는 프로필 내용을 빠르게 양식에 적용시켜볼 수 있도록 하기 위해서 로그인 전에도 작성이 가능하다. 
 >#### ※주의※ 로그인을 하지 않으면 저장되지 않는다.

---
    

### 2.  로그인 화면 (1)

![>](https://drive.google.com/uc?id=1cJc5QY2If9vYIrp4YSBnGqS87pLgTWXB)
> 로그인 화면.
> 구글과 연동하여 로그인.

---


### 3. 로그인 화면 (2)

![>](https://drive.google.com/uc?id=1TPfx0T5FqWzDP3uCGQKWKOsMwjYm1BA-) 
>로그인 후에, 기존 데이터가 존재한다면 해당 데이터를 불러올 수 있다. 
>확인을 누르면 해당 데이터 로드한다.

---


### 4. 로그인 후
![>](https://drive.google.com/uc?id=1jyCA-k4YgBWIBL7fjEvJYINZ2OZpblCJ)
>로드된 기존 데이터.

---
    

### 5. 프로젝트 추가 (1)
![>](https://drive.google.com/uc?id=1z-BagRWHPWlKFPIZmFC0yKJ5Adi7MjiN)
>Github에 있는 프로젝트를 불러오기 위해서 Github 유저 이름을 입력한 후 다음으로 넘어간다.

---
    

### 6. 프로젝트 추가 (2)
![>](https://drive.google.com/uc?id=1XzkuRwcmXKPwo0kAkgi00LrBGHbe2WPY)
>자신의 프로젝트가 나열되고, 그중에 추가하고 싶은 프로젝트를 선택한다.

---
    

### 7. 프로젝트 추가(3)
![>](https://drive.google.com/uc?id=1sbHaUoK4WtaQb0iDQjP-6bPF61UG350c)
>선택한 프로젝트가 입력될 포트폴리오 양식을 선택한다.
>**※ 다양한 양식을 제공할 계획.**

---


### 8. 프로젝트 추가 (4)
![>](https://drive.google.com/uc?id=1wzH2U2QT9CuvTyhHIItnDyPuNn141MVZ)
>양식을 선택하였다면 프로필 양식에 이어서 해당 프로젝트가 추가된 것을 볼 수 있다.

---


### 9. 대시보드 
![>](https://drive.google.com/uc?id=1lVTG6C_ILilo3XSe4irli7zrihklB3yo)
>대시보드 화면. 
>공유된 포트폴리오의 내용 중 사용자 이름과 코딩 능력, 자기소개, 주력 언어, 프로필 사진 정보가 공유 컨테이너에 담기게 된다.

---


### 10. 대시보드 필터
![>](https://drive.google.com/uc?id=1q9CMLaVy7hcShb5-gSOurKNJUcXpdbBk)
>언어 선택 박스에서 원하는 언어를 선택하여 해당 프로그래밍 언어를 사용하는 사용자만을 추려낼 수 있다.

---


### 11. 대시보드 (1)
![>](https://drive.google.com/uc?id=1Ql8EvGiXn-pAjYAjJghym27acyUBZrQh)
>컨테이너 박스를 클릭하게 되면 해당 사용자의 포트폴리오 정보가 표시된다.
>해당 이미지는 프로필 부분.

---


### 12. 대시보드 (2)
![>](https://drive.google.com/uc?id=1URV7RD32pzCQrWOy5ktpi4F3eMUdr8dt)
> 해당 이미지는 프로젝트 부분. 




### **Contact Information**
- :love_letter: tlghks905@gmail.com
- :love_letter: sbseok12@gmail.com
- :love_letter: zkdlu159951@gmail.com
### **Credit**
- [Sihwan_Oh](https://github.com/s0metimes/)
- [Geon_Lee](https://github.com/zkdlu/)
- [Beomseok_Seo](https://github.com/callipenguin/)
### **License**
[The MIT License](https://github.com/meanjs/mean/blob/master/LICENSE.md)

