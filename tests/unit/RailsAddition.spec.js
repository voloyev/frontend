import { mount } from "@vue/test-utils";
import RailsAddition from "@/components/RailsAddition";

describe("rails-addition", () => {
  it("generates link to backend", () => {
    const params = { title: "SomeTitle", link: "1" };
    const wrapper = mount(RailsAddition, params);
    console.log(wrapper);
    expect(wrapper.vm.getLink(params.link)).toEqual(
      "http://localhost:3000/api/v1/product/1"
    );
  });
});
