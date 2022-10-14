import axios from "axios";
import React, { useState } from "react";
import JUPITER from "../../../../../assets/images/jupiter.png";
import * as s from "../../style";

const Jupiter = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Jupiter");

	const [planetName, setPlanetName] = useState();
	const [avgTemp, setAvgTemp] = useState();
	const [gravity, setGravity] = useState();
	const [density, setDensity] = useState();

	const getPlanetData = (planet) => {
		axios
			.get(`https://api.le-systeme-solaire.net/rest/bodies/` + planet, (res) => {
				res.json();
			})
			.then((data) => {
				setPlanetName(data.data.englishName);
				setAvgTemp(data.data.avgTemp);
				setGravity(data.data.gravity);
				setDensity(data.data.density);
			});
	};
	getPlanetData("jupiter");

	return (
		<>
			<s.Section id="jupiter">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={JUPITER} alt="jupiter" />

						<s.Api_Info_Absolute>{api}</s.Api_Info_Absolute>
						<s.Angled_Line />
					</s.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</s.Planet_Container>

				<s.Info_Container>
					<s.Info_Container_Div>
						<s.Api_Links>
							<s.Api_Link
								className={active === "temp" ? "active" : ""}
								onClick={() => {
									setApi((avgTemp - 273.15).toFixed(1) + " °C");
									setActive("temp");
								}}
							>
								Avg.Temp.
							</s.Api_Link>
							<s.Api_Link
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</s.Api_Link>
							<s.Api_Link
								className={active === "density" ? "active" : ""}
								onClick={() => {
									setApi(density.toFixed(2) + " g/cm³");
									setActive("density");
								}}
							>
								Density
							</s.Api_Link>
						</s.Api_Links>
						<s.Planet_Name>{planetName}</s.Planet_Name>
						<s.Info_Headline>Jupiter is a great comet catcher.</s.Info_Headline>
						<s.Info_Text>
							<p>
								The most massive planet in the Solar System probably had a huge
								influence on its history.
							</p>
							<br />
							<p>
								At 318 times the mass of Earth, you can imagine that any passing
								asteroid or comet going near Jupiter has a big chance of being
								caught or diverted.
							</p>
							<br />
							<p>
								Maybe Jupiter was partly to blame for the great bombardment of small
								bodies that peppered our young Solar System early in its history,
								causing scars you can still see on the Moon today.
							</p>
							<br />
							<p>
								And in 1994, astronomers worldwide were treated to a rare sight: a
								comet, Shoemaker-Levy 9, breaking up under Jupiter's gravity and
								slamming into the atmosphere.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Jupiter;
