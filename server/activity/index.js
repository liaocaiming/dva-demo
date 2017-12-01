function getActivityInfo(app) {
  app.get('/api/activity/get-activity-info', (req, res) => {
    res.send({
      carousel: [
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        }
      ],
      poster:[
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        }
      ],
      recommend_shops: [
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        },
        {
          imgSrc: 'http://pic.58pic.com/58pic/13/74/51/99d58PIC6vm_1024.jpg',
          linkUrl: ''
        }
      ]
    })
  })

}
module.exports = getActivityInfo