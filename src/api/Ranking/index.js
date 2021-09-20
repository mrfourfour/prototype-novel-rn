
const MOCK_RESULT = [
    {
        "id": 1,
        "title": "이 멋진 세계의 축복을!",
        "author": "아카츠키 나츠메",
        "image": {
            "uri": "https://blog.kakaocdn.net/dn/cnVU8E/btqNWEhFMlq/6kklkNYjIrUXHdHmyeR7iK/img.png"
        },
        "adult": false,
        "tags": ["판타지", "이세계", "환생물", "저세상물", "김지환물"],
    }, 
    {
        "id": 2,
        "title": "방패 용사 성공담",
        "author": "아네코 유사기",
        "image": {
            "uri": "https://blog.kakaocdn.net/dn/ci32aE/btqGbqxr02a/N3FG2n3YMYddgwyK25wgiK/img.jpg"
        },
        "adult": false,
        "tags": ["이세계물", "판타지", "용사소환"],
    },
    {
        "id": 3,
        "title": "이 멋진 세계의 축복을!",
        "author": "아카츠키 나츠메",
        "image": {
            "uri": "https://blog.kakaocdn.net/dn/cnVU8E/btqNWEhFMlq/6kklkNYjIrUXHdHmyeR7iK/img.png"
        },
        "adult": false,
        "tags": ["학원물", "일상물"]
    },
    {
        "id": 4,
        "title": "이 멋진 세계의 축복을!",
        "author": "아카츠키 나츠메",
        "image": {
            "uri": "https://blog.kakaocdn.net/dn/cnVU8E/btqNWEhFMlq/6kklkNYjIrUXHdHmyeR7iK/img.png"
        },
        "adult": false,
        "tags": []
    },
    {
        "id": 5,
        "title": "이 멋진 세계의 축복을!",
        "author": "아카츠키 나츠메",
        "image": {
            "uri": "https://blog.kakaocdn.net/dn/cnVU8E/btqNWEhFMlq/6kklkNYjIrUXHdHmyeR7iK/img.png"
        },
        "adult": false,
        "tags": []
    }
]

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export async function getDailyRanking(size = 20) {

    // TODO api 붙이기. 
    await sleep(500)
    return MOCK_RESULT 
}