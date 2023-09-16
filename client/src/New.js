import React from 'react'

const New = () => {
  return (
    <div>
        
        <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.2fr 1fr",
                  gap: "1rem",
                  marginLeft: "3rem",
                  alignItems: "center",
                }}
              >
                <MdPayments
                  style={{ fontSize: "3rem" }}
                  className="text-primary"
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  My order
                </span>
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Gift Cards
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                Saved UPI
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                saved cards
              </div>
            </div>
            <hr />
            <div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.2fr 1fr",
                  gap: "1rem",
                  marginLeft: "3rem",
                  alignItems: "center",
                }}
              >
                <MdPermContactCalendar
                  style={{ fontSize: "3rem" }}
                  className="text-primary"
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  MY STUFF
                </span>
              </div>

              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                my coupon
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                my reviews and rating
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                all notification
              </div>
              <div
                style={{
                  fontSize: "1.5rem",
                  marginLeft: "8rem",
                  marginTop: "1rem",
                  textTransform: "capitalize",
                  fontWeight: "400",
                }}
              >
                my watchlist
              </div>
            </div>
            <hr />
            <div style={{ padding: "3rem" }}>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "0.2fr 1fr",
                  gap: "1rem",
                  marginLeft: "3rem",
                  alignItems: "center",
                }}
              >
                <AiOutlineLogout
                  style={{ fontSize: "3rem", cursor: "pointer" }}
                  className="text-primary"
                  onClick={myLogout}
                />
                <span
                  style={{
                    fontSize: "2rem",
                    fontWeight: "500",
                    textTransform: "uppercase",
                  }}
                >
                  log out
                </span>
              </div>
            </div>
    </div>
  )
}

export default New