# abn-amro-assignment

## features

- [x] Mobile friendly
- [x] Responsive (tested on Mobile - iPhone SE, iPhone 12 and Pixel, Tablet - Samsung A10, iPad, Laptop - 1024x768 & 1440x900, Desktop - 1920x1080)
- [x] genres
- [x] unit tests
- [x] search
- [x] show page

## Libraries

- React
- SWR
- Axios
- Tailwind

## Bonus

- If the cast doesn't have a photo, a random Robohash image will be fetched
- Lazy loading of images
- Search and Genre filter can stack i.e., can be used together
- You can re-click the selected genre to remove it.
- Colorscheme: ABN AMRO Green and Yellow

## Architecture

- SWR: Easy API calls management over Axios
- Components: Ideally, they can be extended to be more generic in nature, but this use case didn't fit the case. e.g., TransitionState is generic in nature and can easily extend for any error / message handling purpose.
- Memoize certain components to prevent unnecessary re-renders.
- ErrorBoundary to prevent any unforseen errors on runtime. Obviously, this can be extended very well and this is just a merely just an example.

## Things I would have differently

- Better way of dealing with search and genre together
  - track everything under one object and use reduce for each filter type
- (maybe) use more component for dealing with repeated data (language, genres, rating etc...); but the styling was different and required a similar interface throughout then
- more in-depth testing, this is just basics of jest but I have no idea how in-depth to go.

## CLI

- `yarn run start` to start (do install using yarn first)
- or use docker `docker compose -f docker-compose.dev.yml up --build`
- `yarn run test` to test
