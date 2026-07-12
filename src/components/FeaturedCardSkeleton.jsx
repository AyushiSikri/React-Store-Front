import "./FeaturedCard.css";
import "./FeaturedCardSkeleton.css";

function FeaturedCardSkeleton() {
  return (
    <div className="featured-card">
      <div
        className="skeleton"
        style={{
          width: "150px",
          height: "170px",
          margin: "20px auto",
          borderRadius: "12px",
        }}
      />

      <div style={{ padding: "15px" }}>
        <div
          className="skeleton"
          style={{
            width: "80%",
            height: "18px",
            marginBottom: "10px",
          }}
        />

        <div
          className="skeleton"
          style={{
            width: "40%",
            height: "16px",
          }}
        />
      </div>
    </div>
  );
}

export default FeaturedCardSkeleton;