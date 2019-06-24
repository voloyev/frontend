import decorateProduct from "@/utils/ProductsUtils";

describe("decorateProduct", () => {
  it("adds from Rails at the end of title", () => {
    expect(decorateProduct("bob")).toBe("bob from Rails");
  });
});
