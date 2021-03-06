const { AppInfo } = require('../../../models');

const initialValue = {
    com_name: 'Into Space',
    ceo_name: '양성준',
    business_num: '000-0000-000000',
    cybertrade_num: '000-0000-000000',
    tel: '010-1234-5678',
    fax: '000-0000-0000',
    tax: '000-0000-0000',
    addr: '서울시 광진구 화양동',
    addr_detail: '건국대학교',
    addr_extra: '',
    post_num: '50505',
    info_manager: '양성준',
    info_manager_email: 'yanga2486@naver.com',
    private_policy: `
        <h2><strong>1. 개인정보처리방침의 의의</strong></h2>
        <p>&nbsp;</p>
        <p>주식회사 인투스페이스(이하”회사”)는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, &nbsp;‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.</p>
        <p>회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.</p>
        <p>“개인정보처리방침”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.</p>
        <p>본 개인정보처리방침은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2><strong>2. 개인정보 수집</strong></h2>
        <p>&nbsp;</p>
        <p>서비스 제공을 위한 필요 최소한의 개인정보를 수집하고 있습니다.</p>
        <p>회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별 어플리케이션이나 프로그램 등을 통해 아래와 같은 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
        <p>&nbsp;</p>
        <h3>[인투스페이스계정]</h3>
        <p>필수 : 이메일, 비밀번호, 이름(닉네임), 프로필사진, 친구목록, 카카오톡 전화번호(카카오톡 이용자의 경우에 한함), 연락처, 서비스 이용내역, 서비스 내 구매 및 결제 내역 선택 : 생년월일, 성별, 배송지정보(수령인명, 배송지 주소, 전화번호)</p>
        <p>&nbsp;</p>
        <h3>[본인인증 시]</h3>
        <p>이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI)</p>
        <p>&nbsp;</p>
        <h3>[법정대리인 동의 시]</h3><p>법정대리인 정보(이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복 가입확인정보(DI))</p>
        <p>&nbsp;</p>
        <h3>[유료서비스 이용 시]</h3>
        <p><strong>신용카드 결제 시 :</strong> 카드번호(일부), 카드사명 등</p>
        <p><strong>휴대전화번호 결제 시 :</strong> 휴대전화번호, 결제승인번호 등</p>
        <p><strong>계좌이체 시 :</strong> 예금주명, 계좌번호, 계좌은행 등</p>
        <p><strong>상품권 이용 시 :</strong> 상품권 번호, 해당 사이트 아이디</p>
        <p><strong>[환불처리 시]</strong> 계좌은행, 계좌번호, 예금주명, 이메일</p>
        <p><strong>[현금영수증 발행 시]</strong> 휴대폰번호, 현금영수증 카드번호</p>
        <p>&nbsp;</p><p><strong>필수정보란? :</strong> 해당 서비스의 본질적 기능을 수행하기 위한 정보</p>
        <p><strong>선택정보란? :</strong> 보다 특화된 서비스를 제공하기 위해 추가 수집하는 정보 (선택 정보를 입력하지 않은 경우에도 서비스 이용 제한은 없습니다.)</p>
        <p>&nbsp;</p>
        <p>“개인정보처리방침”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.&nbsp;</p>
        <p>본 개인정보처리방침은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2>3. 개인정보처리방침의 의의</h2>
        <p>&nbsp;</p>
        <p>주식회사 인투스페이스(이하”회사”)는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, &nbsp;‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.</p>
        <p>회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.</p>
        <p>“개인정보처리방침”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;본 개인정보처리방침은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.&nbsp;<br>&nbsp;</p>`,
    use_terms: `
        <h2><strong>1. 이용약관의 의의</strong></h2>
        <p>&nbsp;</p>
        <p>주식회사 인투스페이스(이하”회사”)는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, &nbsp;‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.</p>
        <p>회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.</p>
        <p>“이용약관”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.</p>
        <p>본 이용약관은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2><strong>2. 개인정보 수집</strong></h2>
        <p>&nbsp;</p>
        <p>서비스 제공을 위한 필요 최소한의 개인정보를 수집하고 있습니다.</p>
        <p>회원 가입 시 또는 서비스 이용 과정에서 홈페이지 또는 개별 어플리케이션이나 프로그램 등을 통해 아래와 같은 서비스 제공을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
        <p>&nbsp;</p>
        <h3>[인투스페이스계정]</h3>
        <p>필수 : 이메일, 비밀번호, 이름(닉네임), 프로필사진, 친구목록, 카카오톡 전화번호(카카오톡 이용자의 경우에 한함), 연락처, 서비스 이용내역, 서비스 내 구매 및 결제 내역 선택 : 생년월일, 성별, 배송지정보(수령인명, 배송지 주소, 전화번호)</p>
        <p>&nbsp;</p>
        <h3>[본인인증 시]</h3>
        <p>이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복가입확인정보(DI)</p>
        <p>&nbsp;</p>
        <h3>[법정대리인 동의 시]</h3><p>법정대리인 정보(이름, 성별, 생년월일, 휴대폰번호, 통신사업자, 내/외국인 여부, 암호화된 이용자 확인값(CI), 중복 가입확인정보(DI))</p>
        <p>&nbsp;</p>
        <h3>[유료서비스 이용 시]</h3>
        <p><strong>신용카드 결제 시 :</strong> 카드번호(일부), 카드사명 등</p>
        <p><strong>휴대전화번호 결제 시 :</strong> 휴대전화번호, 결제승인번호 등</p>
        <p><strong>계좌이체 시 :</strong> 예금주명, 계좌번호, 계좌은행 등</p>
        <p><strong>상품권 이용 시 :</strong> 상품권 번호, 해당 사이트 아이디</p>
        <p><strong>[환불처리 시]</strong> 계좌은행, 계좌번호, 예금주명, 이메일</p>
        <p><strong>[현금영수증 발행 시]</strong> 휴대폰번호, 현금영수증 카드번호</p>
        <p>&nbsp;</p><p><strong>필수정보란? :</strong> 해당 서비스의 본질적 기능을 수행하기 위한 정보</p>
        <p><strong>선택정보란? :</strong> 보다 특화된 서비스를 제공하기 위해 추가 수집하는 정보 (선택 정보를 입력하지 않은 경우에도 서비스 이용 제한은 없습니다.)</p>
        <p>&nbsp;</p>
        <p>“이용약관”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.&nbsp;</p>
        <p>본 이용약관은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <h2>3. 이용약관의 의의</h2>
        <p>&nbsp;</p>
        <p>주식회사 인투스페이스(이하”회사”)는 이용자의 ‘동의를 기반으로 개인정보를 수집·이용 및 제공’하고 있으며, &nbsp;‘이용자의 권리 (개인정보 자기결정권)를 적극적으로 보장’합니다.</p>
        <p>회사는 정보통신서비스제공자가 준수하여야 하는 대한민국의 관계 법령 및 개인정보보호 규정, 가이드라인을 준수하고 있습니다.</p>
        <p>“이용약관”이란 이용자의 소중한 개인정보를 보호함으로써 이용자가 안심하고 서비스를 이용할 수 있도록 회사가 준수해야 할 지침을 의미합니다.</p>
        <p>&nbsp;</p>
        <p>&nbsp;본 이용약관은 회사가 제공하는 카카오계정 기반의 서비스(이하 ‘서비스’라 함)에 적용됩니다.&nbsp;<br>&nbsp;</p>`,
    version: '1.0.0',
}


const init = async () => {
    const { com_name } = initialValue;
    await AppInfo.findOrCreate({
        where: { com_name },
        defaults: initialValue
    });
}

module.exports = {
    init
};