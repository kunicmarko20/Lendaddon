import SupportsExecutor from "../SupportsExecutor";
import ReleaseButtonExecutor from "./ReleaseButtonExecutor";
import ElementFinder from "../finder/ElementFinder";

const executor = new SupportsExecutor(
    new ReleaseButtonExecutor(
        new ElementFinder()
    )
);
executor.execute();
