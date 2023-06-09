8 Mar 2023

1.  와이어 프레임 구상 (메인 페이지, 랭킹 페이지)

2.  서비스 테마 색상 논의 (기본 모드 - #1E9EFF, 다크 모드 - #FF6C6C )

3.  디자인 구상 (메인 페이지, 랭킹 페이지)

        1-1. 메인 페이지 PC버전 +다크모드

    ![Group_42](/uploads/84992c7ed7d058f5d49d1ad45955749e/Group_42.png)

        1-2. 메인 페이지 모바일 +다크모드

    ![Group_43](/uploads/890c4568029ff48ecd593e13285bdeb8/Group_43.png)

        2-1. 랭킹 페이지 PC버전

    ![3-1._랭킹_-_레코딜리_베스트_랭킹](/uploads/ef172ad40156255c28f21cd14dc5d6da/3-1._랭킹_-_레코딜리_베스트_랭킹.png)

9 Mar 2023

1.  와이어 프레임 구상 (랭킹 페이지, 검색 페이지)

2.  디자인 구상 (랭킹 페이지, 검색 페이지)

3.  기능명세서 작성

        3-1. 랭킹 페이지 PC+모바일 버전

    ![Group_43__1_](/uploads/a3e91d35e37165b1800d0d5cd1eaa4b5/Group_43__1_.png)

        6-1. 검색 페이지

    ![6-1._검색](/uploads/a4f77ce05203ffe39a17a6406fbb641a/6-1._검색.png)

10 Mar 2023

1. 유저 플로우 및 기능 명세서 작성
2. 기능명세서 구체화 및 확정
3. 와이퍼 프레임 구상 (추천, 책장, 검색, 마이페이지 등 개편)

13 Mar 2023

1. 팀미팅 후 논의 사항 구체화 필요
    - 추천 탭을 없애고 메인을 강력하게 개편
    - 처음부터 관점을 다시 생각해서 사용자들이 원하는 방향성 고려
    - 리뷰 기능 강화
    - 전체적 '레코델리'의 의미를 줄 수 있는 방향 고려
    - 사이트 내에서 작품을 볼 수 있는 등의 사용자가 이용할 의의의 방향성 고려
2. 피그마 마이페이지 작성 중

14 Mar 2023

1. 전체적 컨셉 재정의
2. 기능 최소화

16 Mar 2023

1. 발표 흐름 및 PPT 준비 

17 Mar 2023

1. 웹툰, 만화를 주제로 본 작품을 선택하면 MBTI 검사, 인바디와 유사하게 분석하여 통계 및 추천을 보여주는 것으로 변경
디테일을 살리는 방향으로 진행

작가로 키워드를 가져오는 방식으로 관점의 전환

태그를 이용해 유사도를 뽑아 일치하는 %를 구체적으로 나타내주기

오타 보정 -> api는 존재, 사용하게 되면 구현은 가능

user flow
-> 1. 표지로 선택 
   2. 작품 키워드를 이용,
        if 지정 태그에 맞는 입력 시 -> 그대로 진행해 분석
        else if 지정 태그에 없을 시 -> 국어사전 api를 이용하며 유사도를 찾아서 적용(유사 단어 존재 시)

   3. 결과
    - 작품
    - 연재작/완결작 분리하여 결과
    - 작가 정보 -> 작가명, 작가가 연재한 작품, 작가가 연재한 장르
    - 같은 유형의 사람들의 호 -> 추천 % 출력

20 Mar 2023

1. 피그마 나의 웹툰 독자 유형 테스트 & 웹툰 취향 분석 테스트 페이지 제작

21 Mar 2023

1. 나의 웹툰 독자 유형 테스트 설계
![Frame_277](/uploads/cc67ae3c753ff6f85fd5fa222e595401/Frame_277.png)

L/H - S/W - R/E - A/T 로 구분, MBTI 유형과 같은 원리로 16가지 유형으로 결과가 생성

22 Mar 2023

1. 나의 웹툰 독자 유형 테스트 스토리형으로 변경
2. 최종 설문 구글폼 만들어 초기 더미 데이터 확보 중 (22일 오후 6시 기준 117개 응답)

23 Mar 2023

1. 최종 설문 구글폼(23일 오후 5시 기준 155개 응답) 데이터 가공
-> 각 설문별 주관식 응답의 웹툰 목록 정제 및 오타 보정, 같은 웹툰은 이름 통일
2. 피그마 전체 유형 보기 페이지 추가
