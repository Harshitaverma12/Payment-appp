import React, { useState, useEffect } from "react";
import bg from "../src/assets/BackGround.png";
import icon1 from "../src/assets/Icon 1.png";
import icon2 from "../src/assets/Icon 1 (1).png";
import pay from "../src/assets/Frame 12537.png";
import { FormControlLabel, Typography } from "@mui/material";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { FormControl } from "@mui/material";
import { Button } from "@mui/material";
import ads from "../src/assets/Group 15.png";
import course from "../src/assets/Group 20.png";
import live from "../src/assets/Group 16.png";
import schl from "../src/assets/Group 17.png";
import time from "../src/assets/Group 19.png";

function Landing() {
  const [value, setValue] = useState("two");
  const [finalvalue, setfinalvalue] = useState(18500);
  const [subvalue, setsubvalue] = useState(0);

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  useEffect(() => {
    if (value === "two") {
      setsubvalue(finalvalue - 179);
    } else if (value === "three") {
      setsubvalue(finalvalue - 149);
    } else if (value === "four") {
      setsubvalue(finalvalue - 99);
    }
  }, [value]);

  return (
    <div
      className="container"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "900px",
        display: "flex",
      }}
    >
      <div style={{ marginTop: "7rem", marginLeft: "4rem" }}>
        <Typography variant="h5" style={{ color: "white", fontSize: "2.5rem" }}>
          Access curated courses worth
        </Typography>
        <Typography variant="h5" style={{ color: "white", fontSize: "2.5rem" }}>
          ₹ 18,500 at just ₹ 99 per year!
        </Typography>
        <div>
          <div style={{ marginTop: "1.5rem" }}>
            <Typography style={{ color: "white", fontSize: "22px" }}>
              <img
                src={course}
                style={{
                  color: "white",
                  height: "2rem",
                  marginRight: "1rem",
                  marginLeft: "-1rem",
                }}
              ></img>{" "}
              100+ Job Relevant Courses
            </Typography>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Typography style={{ color: "white", fontSize: "22px" }}>
              <img
                src={time}
                style={{ color: "white", height: "2rem", marginRight: "1rem" }}
              ></img>{" "}
              20,000+ Hours of Contents
            </Typography>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Typography style={{ color: "white", fontSize: "22px" }}>
              <img
                src={live}
                style={{ color: "white", height: "2rem", marginRight: "1rem" }}
              ></img>{" "}
              Exclusive webinar access
            </Typography>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Typography style={{ color: "white", fontSize: "22px" }}>
              <img
                src={schl}
                style={{ color: "white", height: "2rem", marginRight: "1rem" }}
              ></img>{" "}
              Scholarship worth Rs.94,500
            </Typography>
          </div>
          <div style={{ marginTop: "1.5rem" }}>
            <Typography style={{ color: "white", fontSize: "22px" }}>
              <img
                src={ads}
                style={{ color: "white", height: "2rem", marginRight: "1rem" }}
              ></img>
              Ad Free learning Experience
            </Typography>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "50rem",
          background: "#ffffff",
          width: "31rem",
          marginLeft: "11rem",
          marginTop: "2rem",
        }}
      >
        <img
          src={icon1}
          alt="logo"
          style={{ marginTop: "1rem", marginLeft: "7rem" }}
        />

        <img src={icon2} alt="logo" style={{ marginLeft: "11rem" }} />
        <Typography style={{ marginLeft: "6.5rem" }}>Sign Up</Typography>
        <Typography style={{ marginLeft: "19.5rem", marginTop: "-1.3rem" }}>
          Subscribe
        </Typography>
        <Typography style={{ textAlign: "center", marginTop: "1rem" }}>
          Select Your Subscription Plan
        </Typography>
        <div
          style={{
            border: "1px solid #BEBEBE",
            background: "#E7E7E7",
            padding: ".5rem",
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
          }}
        >
          <FormControl>
            <div
              style={{
                background: "#F77171",
                width: "9rem",
                marginLeft: "2rem",
                marginTop: "-0.5rem",
                textAlign: "center",
                borderRadius: "0px 0px 4px 4px",
              }}
            >
              <Typography>Offer Expired</Typography>
            </div>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
              disabled={true}
            >
              <FormControlLabel
                value="one"
                control={<Radio />}
                label="12 months Subscription"
                disabled={true}
              />
              <div style={{ marginLeft: "22rem", marginTop: "-3rem" }}>
                <Typography>
                  {" "}
                  Total
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 99
                </Typography>
              </div>
              <div style={{ marginLeft: "22.8rem" }}>
                <Typography>
                  {" "}
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 8 /mo
                </Typography>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            border: "1px solid #47BA68",
            background: "#D7EDDD",
            padding: ".5rem",
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
          }}
        >
          <FormControl>
            <div
              style={{
                background: "#47BA68",
                width: "9rem",
                marginLeft: "2rem",
                marginTop: "-0.5rem",
                textAlign: "center",
                borderRadius: "0px 0px 4px 4px",
              }}
            >
              <Typography>Recommended</Typography>
            </div>
            <RadioGroup
              style={{ color: "#47BA68" }}
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="two"
                control={<Radio style={{ color: "#47BA68" }} />}
                label="12 months Subscription"
              />
              <div style={{ marginLeft: "22rem", marginTop: "-3rem" }}>
                <Typography>
                  {" "}
                  Total
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 179
                </Typography>
              </div>
              <div style={{ marginLeft: "22.8rem" }}>
                <Typography>
                  {" "}
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 15 /mo
                </Typography>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            border: "1px solid #BEBEBE",
            background: "#ffffff",
            padding: ".5rem",
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="three"
                control={<Radio />}
                label="6 months Subscription"
              />
              <div style={{ marginLeft: "22rem", marginTop: "-3rem" }}>
                <Typography>
                  {" "}
                  Total
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 149
                </Typography>
              </div>
              <div style={{ marginLeft: "22.8rem" }}>
                <Typography>
                  {" "}
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 33 /mo
                </Typography>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <div
          style={{
            border: "1px solid #BEBEBE",
            background: "#ffffff",
            padding: ".5rem",
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
          }}
        >
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="four"
                control={<Radio />}
                label="3 months Subscription"
              />
              <div style={{ marginLeft: "22rem", marginTop: "-3rem" }}>
                <Typography>
                  {" "}
                  Total
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 99
                </Typography>
              </div>
              <div style={{ marginLeft: "22.8rem" }}>
                <Typography>
                  {" "}
                  <CurrencyRupeeIcon style={{ fontSize: "1rem" }} /> 33 /mo
                </Typography>
              </div>
            </RadioGroup>
          </FormControl>
        </div>
        <hr style={{ marginTop: "1rem", width: "28rem" }} />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography style={{ marginLeft: "2rem" }}>
            Subscription Fee
          </Typography>
          <Typography style={{ marginRight: "2rem" }}>
            <CurrencyRupeeIcon style={{ fontSize: "1rem" }} />
            {finalvalue}
          </Typography>
        </div>
        <div
          style={{
            border: "1px solid #BEBEBE",

            padding: ".5rem",
            borderRadius: "4px",
            boxShadow: "0 0 4px rgba(0, 0, 0, 0.2)",
            marginLeft: "1rem",
            marginRight: "1rem",
            marginTop: "1rem",
            background:
              "linear-gradient(135deg, rgba(222, 67, 19, 0.2) 0%, rgba(222, 67, 19, 0.2) 0.75%, rgba(222, 67, 19, 0.2) 2.92%, rgba(222, 68, 20, 0.2) 6.37%, rgba(223, 69, 21, 0.2) 10.97%, rgba(223, 72, 22, 0.2) 16.59%, rgba(224, 75, 24, 0.2) 23.1%, rgba(225, 80, 27, 0.2) 30.37%, rgba(227, 86, 31, 0.2) 38.27%, rgba(229, 94, 36, 0.2) 46.66%, rgba(231, 104, 43, 0.2) 55.41%, rgba(235, 117, 51, 0.2) 64.39%, rgba(238, 132, 60, 0.2) 73.47%, rgba(243, 149, 71, 0.2) 82.52%, rgba(248, 169, 84, 0.2) 91.41%, rgba(254, 193, 99, 0.2) 100%)",
            borderRadius: "8px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography style={{ color: "#DE4313" }}>
              Limited time offer
            </Typography>
            <Typography style={{ color: "#DE4313" }}>
              <CurrencyRupeeIcon style={{ fontSize: "1rem" }} />
              {subvalue}
            </Typography>
          </div>
          <div>
            <Typography style={{ color: "#DE4313" }}>
              Offer valid till 25th March 2023
            </Typography>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <Typography
            style={{
              marginLeft: "2rem",
              color: "#3C4852",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            Total(Incl. of 18% GST)
          </Typography>
          <Typography
            style={{
              marginRight: "2rem",
              color: "#3C4852",
              fontSize: "20px",
              fontWeight: "600",
            }}
          >
            <CurrencyRupeeIcon
              style={{
                fontSize: "1rem",
                color: "#3C4852",

                fontWeight: "700",
              }}
            />{" "}
            {finalvalue - subvalue}
          </Typography>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "2rem",
          }}
        >
          <Button
            variant="outlined"
            style={{
              color: "#F77171",
              border: "1px solid #F77171",
              width: "9rem",
            }}
          >
            Cancel
          </Button>
          <Button
            style={{ color: "white", background: "#47BA68" }}
            variant="contained"
          >
            Proceed to Pay
          </Button>
        </div>
        <img
          src={pay}
          alt="logo"
          style={{ marginTop: "1rem", marginLeft: "3rem" }}
        />
      </div>
    </div>
  );
}

export default Landing;
