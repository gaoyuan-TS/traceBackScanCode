<template>
  <view id="record">
    <view class="list">
      <view class="title">扫码记录</view>
      <view class="top">
        <view class="time">查询时间</view>
        <view class="dizhi">查询地址</view>
      </view>
      <view class="list-bottom">
        <view class="center" v-for="(item,index) in this.list" :key="index">
          <view class="left">{{item.scanTime}}</view>
          <view class="right">{{item.scanAddress}}</view>
        </view>
      </view>
    </view>
  </view>
</template>
<script>
export default {
  data () {
    return {
      id: 0,
      list: []
    }
  },
  onLoad (option) {
    this.id = option.id
    // console.log(this.id)
    this.getRecordList()
  },
  methods: {
    getRecordList () {
      this.$common.get('/trace-api/trace/getScanRecordBySid?sid=' + this.id).then((data) => {
        // console.log(data)
        this.list = data.data.data
        console.log(this.list)
      })
    },
  }
}
</script>
<style lang="less">
#record {
  position: relative;
  .list {
    font-size: 32upx;
    padding-bottom: 50px;
    .title {
      margin: 10upx 0px;
      width: 100%;
      text-align: center;
      font-size: 32upx;
      font-weight: 600;
    }
    .top {
      padding: 10upx;
      display: flex;
      border-bottom: 1px solid #ccc;
      .time {
        flex: 2;
        text-align: center;
      }
      .dizhi {
        flex: 5;
        text-align: center;
      }
    }
    .list-bottom {
      .center {
        padding: 10upx;
        display: flex;
        border-bottom: 1px solid #ccc;
        .left {
          flex: 2;
          text-align: center;
        }
        .right {
          flex: 5;
          text-align: center;
          font-size: 30upx;
          padding: 0px 10upx;
        }
      }
    }
  }
}
</style>
