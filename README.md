
# 기술 스택
- react-native, react-query

# 디자인 패턴
- Atomic Design Pattern.
  * https://tech.madup.com/atomic-design/
  * Atom - 컴포넌트 단위 중 가장 작은 모임
  * MoleCules - Atom을 모아놓은 곳, Atom끼리의 디자인
  * Organism - MoleCules들과 Atom들을 모아 만듦. 그 자체로도 스크린의 한 구역을 차지함.  
  * Template - 디자인적으로 완성. Error등으로 디자인 분기점 생성
  * Screen - 비즈니스 로직을 Template에 적용.
  
# 설명
 - 당근마켓의 클론코딩입니다.
 
# 현재 완성된 스크린
 - Intro(로그인 전 인트로)
 - District
    * 현재 위치를 기반으로 DistrictList를 불러옴.
    * Permission Denied, Not Found Error Screen
    * 이름 기반 검색 기능 
 - AuthPhone
    * 휴대폰 번호, device id로 회원가입 또는 로그인
    * 인증 문자 받을 시 5분 카운트
    * 10초마다 보낼 수 있게.
    * 에러 처리 스낵바
    * 하루 최대 6회
    * 코드 입력 후 인증
    * 코드 입력 에러 처리
  
# 현재 진행중인 스크린
 - Home
   * 상품 리스트 조회(진행중)
