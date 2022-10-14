import axios from "axios";
import React, { useState } from "react";
import NEPTUNE from "../../../../../assets/images/neptune.png";
import * as s from "../../style";

const Neptune = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Neptune");

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
	getPlanetData("neptune");

	return (
		<>
			<s.Section id="neptune">
				<s.Planet_Container>
					<s.Planet>
						<s.Img src={NEPTUNE} alt="neptune" />

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
						<s.Info_Headline>Neptune has supersonic winds. </s.Info_Headline>
						<s.Info_Text>
							<p>
								While on Earth we are concerned about hurricanes, the strength of
								these storms is nowhere near what you would find on Neptune.
							</p>
							<p>
								At its highest altitudes, according to NASA, winds blow at more than
								1,100 miles per hour (1,770 kilometers per hour).
							</p>
							<p>
								To put that in context, that's faster than the speed of sound on
								Earth, at sea level.
							</p>
							<br />
							<p>
								Why Neptune is so blustery is a mystery, especially considering the
								Sun's heat is so little at its distance.
							</p>
						</s.Info_Text>
						<s.Info_Container_Underline />
					</s.Info_Container_Div>
				</s.Info_Container>
			</s.Section>
		</>
	);
};

export default Neptune;
