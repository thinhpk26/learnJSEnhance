/**
 * Các loại phạm vi
   - Global - toàn cầu
   - Code block - Khối mã: let, const
   - Local scope - Hàm: var, function
 * Khi gọi mỗi hàm luôn có một phạm vi mới đc truy cập
 * Các hàm có thể truy cập đc biến ở phậm vi của nó và bên ngoài nó
 * Cách thức truy cập - tìm ở phạm vi của nó sau đó nhảy dần ra phạm vi lớn hơn
 * Khi nào 1 biến đc xóa khỏi bộ nhớ
   - Global - khi tắt trang hoặc thoát ứng dụng
   - Code block và trong hàm - khi gọi xong hàm là tự động xóa bộ nhớ
   - Biến trong hàm được tham chiếu bởi 1 hàm - học trong bài Closure
 */