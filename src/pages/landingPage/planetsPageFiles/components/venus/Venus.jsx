import axios from "axios";
import React, { useState } from "react";
import VENUS from "../../../../../assets/images/venus.png";
import * as style from "../../style";

const Venus = () => {
	const [active, setActive] = useState("");
	const [api, setApi] = useState("Venus");

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
	getPlanetData("venus");

	return (
		<>
			<style.Section id="venus">
				<style.Planet_Container>
					<style.Planet>
						<style.Img src={VENUS} alt="venus" />

						<style.Api_Info_Absolute>{api}</style.Api_Info_Absolute>
						<style.Angled_Line />
					</style.Planet>
					<p>
						Image by &nbsp;
						<a href="https://www.freepik.com/free-vector/sun-moon-mercury-venus-earth-mars-jupiter-saturn-uranus-neptun-colorful-planets-set_13768792.htm#query=planets&position=23&from_view=keyword">
							macrovector
						</a>
					</p>
				</style.Planet_Container>

				<style.Info_Container>
					<style.Info_Container_Div>
						<style.Api_Links>
							<style.Api_Link
								className={active === "gravity" ? "active" : ""}
								onClick={() => {
									setApi(gravity.toFixed(1) + " m/s²");
									setActive("gravity");
								}}
							>
								Gravity
							</style.Api_Link>
							<style.Api_Link
								className={active === "temp" ? "active" : ""}
								onClick={() => {
									setApi((avgTemp - 273.15).toFixed(1) + " °C");
									setActive("temp");
								}}
							>
								Avg.Temp.
							</style.Api_Link>
							<style.Api_Link
								className={active === "density" ? "active" : ""}
								onClick={() => {
									setApi(density.toFixed(2) + " g/cm³");
									setActive("density");
								}}
							>
								Density
							</style.Api_Link>
						</style.Api_Links>
						<style.Planet_Name>{planetName}</style.Planet_Name>
						<style.Info_Headline>Venus doesn't have any moons, and we aren't sure why.</style.Info_Headline>
						<style.Info_Text>
							<p>
								Both Mercury and Venus have no moons, which can be considered a surprise given there are dozens of other ones
								around the Solar System.
							</p>
							<p>Saturn has over 60, for example.</p>
							<p>
								And some moons are little more than captured asteroids, which may have been what happened with Mars' two
								moons, for example.
							</p>
							<br />
							<p>So what makes these planets different?</p>
							<p>
								No one is really sure why Venus doesn't, but there is at least one stream of research that suggests it could
								have had one in the past.
							</p>
						</style.Info_Text>
						<style.Info_Container_Underline />
					</style.Info_Container_Div>
				</style.Info_Container>
			</style.Section>
		</>
	);
};

export default Venus;
