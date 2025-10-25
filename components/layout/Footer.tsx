export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">카타르시스 연구</h3>
            <p className="text-sm text-gray-600">
              아리스토텔레스를 넘어서는 새로운 카타르시스 이론
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">논문 정보</h3>
            <p className="text-sm text-gray-600">
              저자: 조진용<br />
              국립경국대학교 영문학 박사<br />
              2025년 2월
            </p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">연구 영역</h3>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 존재론적 카타르시스</li>
              <li>• 가치론적 카타르시스</li>
              <li>• 가상적 카타르시스</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-gray-600">
          <p>&copy; 2025 조진용. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
