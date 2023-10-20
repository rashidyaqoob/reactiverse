import { render, screen } from "@testing-library/react";
import HomepageBanner from "./Homepage-banner.jsx";

describe('Homepage Banner', () => {
    test('Renders correctly', () => {
        render(<HomepageBanner />);
        const image = screen.getByTestId('homepage-banner__img');
        expect(image).toBeInTheDocument();
    })
})