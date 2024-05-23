const User = (props) => {
  return (
    <div className="homepage-container">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputName">Tên Khách Hàng</label>
            <input
              type="name"
              class="form-control"
              id="inputName4"
              placeholder="Name"
            />
          </div>
        </div>
        <div class="form-group">
          <label for="inputTimecheckin">Time CheckIn</label>
          <input
            type="text"
            class="form-control"
            id="inputTimecheckin"
            placeholder="8:58 AM"
          />
        </div>
        <div class="form-group">
          <label for="inputAddress2">Ngày Thuê</label>
          <input
            type="text"
            class="form-control"
            id="inputAddress2"
            placeholder="date 23/5/2024"
          />
        </div>
        <div class="form-row">
          <div class="form-group col-md-6">
            <label for="inputCity">Số CCCD</label>
            <input
              type="text"
              class="form-control"
              id="inputCity"
              placeholder="0123213223"
            />
          </div>
          <div class="form-group col-md-4">
            <label for="inputState">Chọn loại phòng</label>
            <select id="inputState" class="form-control">
              <option selected>VIP</option>
              <option>Thường</option>
            </select>
          </div>
          <div class="form-group col-md-2">
            <label for="inputZip">Yêu cầu thêm</label>
            <input type="text" class="form-control" id="inputZip" />
          </div>
        </div>
        <div class="form-group">
          <div class="form-check"></div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          placeholder="date 23/5/2024"
        >
          Lấy Phòng Ngay
        </button>
      </form>
    </div>
  );
};
export default User;
