 

function ProductDetailSkeleton() {
  return (
    <section className="product-detail-section">

      <section className="product-detail-inner-section">

        <div
          className="skeleton"
          style={{
            width: "80%",
            height: "300px",
            borderRadius: "10px"
          }}
        />

        <div className="product-detail-img-div">
          {Array.from({ length: 4 }).map((_, index) => (
            <div
              key={index}
              className="skeleton"
              style={{
                width: "90px",
                height: "90px",
                borderRadius: "10px"
              }}
            />
          ))}
        </div>

      </section>

      <section className="product-detail-section-para">

        <div
          className="skeleton"
          style={{
            width: "140px",
            height: "24px",
            marginBottom: "16px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "70%",
            height: "30px",
            marginBottom: "16px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "120px",
            height: "16px",
            marginBottom: "20px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "100%",
            height: "16px",
            marginBottom: "10px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "85%",
            height: "16px",
            marginBottom: "20px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "90px",
            height: "26px",
            marginBottom: "20px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "120px",
            height: "20px",
            marginBottom: "25px"
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "170px",
            height: "44px",
            borderRadius: "6px"
          }}
        />

      </section>

    </section>
  );
}

export default ProductDetailSkeleton;