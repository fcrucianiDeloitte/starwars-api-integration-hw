import { ApiGet } from "../classes/Api";
import Film from "../models/Film";

test("Test: Films", async () => {
  const api = new ApiGet<Film>("https://swapi.dev/api/films");
  const results = await api.getData(1);

  expect(results).not.toHaveLength(0);
  expect(results).toHaveProperty('length');
});
