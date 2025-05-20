import PublicLayout from "@/layouts/PublicLayout";

const AboutPage = () => {
  return (
    <PublicLayout>
      <div className="text-5xl tracking-tight text-center pt-10">
        Giới thiệu về chúng tôi
      </div>
      <article className="prose md:prose-lg mx-auto max-w-5xl mt-4 px-4 md:px-0">
        <p>Kính chào quý khách!</p>
        <p>
          Công ty chúng tôi được thành lập với mục tiêu đem lại những sản phẩm
          ắc quy Vision chất lượng cao, giá cả tốt đi kèm với dịch vụ chăm sóc
          khách tốt nhất .
        </p>
        <p>
          Chúng tôi cung cấp dòng ắc quy varta chính hãng, chất lượng cao . Phù
          hợp cho tất cả các dòng xe.
        </p>
        <p>
          Và với dịch vụ thay bình ắc quy, câu nổ bình ắc quy nhanh chóng , tiện
          lợi tại các địa bàn trên thành phố Hồ Chí Minh và tỉnh Tiền Giang ...
          với sự chuyên nghiệp của chúng tôi chắc chắn sẽ làm hài lòng quý khách
          .
        </p>
        <p>
          Khách hàng tham khảo bảng giá ắc quy Vision luôn được cập nhật mới
          nhất tại đây .
        </p>
        <p>
          Để biết thêm thông tin chi tiết, quý khách vui lòng liên hệ hotline:{" "}
          <span className="font-semibold">0852520536</span> Mr.Duc
        </p>
        <p>Trang Facebook</p>
        <p>Rất hân hạnh được phục vụ quý khách!</p>
      </article>
    </PublicLayout>
  );
};

export default AboutPage;
