export class RenderService {
	getRenders() {
		return [
		{
			imageUrl: "./app/limelight_logo.jpg"
			title: "Json Response"
			handle: "@response1"
			content: "This will be JSON!"
			totalLikes: 9999
			iLike: false
		},
		{
			imageUrl: "./app/HPIM1017.jpg"
			title: "Json Response 2"
			handle: "@response2"
			content: "This will be more JSON!"
			totalLikes: 9999
			iLike: true
		}];
	}
}